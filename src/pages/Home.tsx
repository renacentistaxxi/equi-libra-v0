import { useState, useEffect } from 'react';
import { signOut, type User } from 'firebase/auth';
import {
  collection, addDoc, query, orderBy, onSnapshot, serverTimestamp,
  waitForPendingWrites, getDocFromServer
} from 'firebase/firestore';
import { auth, db } from '../firebase';

interface Capture {
  id: string;
  texto: string;
  creadoLocal: number;
}

export default function Home({ user }: { user: User }) {
  const [texto, setTexto] = useState('');
  const [capturas, setCapturas] = useState<Capture[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'users', user.uid, 'captures'),
      orderBy('creadoLocal', 'desc')
    );
    const unsub = onSnapshot(q, { includeMetadataChanges: true }, (snap) => {
      console.log('[snapshot] fromCache:', snap.metadata.fromCache,
        '| hasPendingWrites:', snap.metadata.hasPendingWrites,
        '| docs:', snap.size);
      snap.docs.forEach(d => {
        console.log('[snapshot:doc]',
          'id:', d.id,
          '| path:', d.ref.path,
          '| hasPendingWrites:', d.metadata.hasPendingWrites,
          '| data:', d.data());
      });
      setCapturas(snap.docs.map(d => ({ id: d.id, ...d.data() } as Capture)));
    }, (error) => {
      console.error('Error en listener:', error);
    });
    return unsub;
  }, [user.uid]);

  const guardar = async () => {
    if (!texto.trim()) return;

    let resuelto = false;
    const timeout = setTimeout(() => {
      if (!resuelto) console.warn('addDoc sigue pendiente después de 10s');
    }, 10000);

    try {
      console.log('[guardar] antes de addDoc');
      const docRef = await addDoc(collection(db, 'users', user.uid, 'captures'), {
        texto: texto.trim(),
        creadoLocal: Date.now(),
        creadoEn: serverTimestamp(),
        estado: 'inbox',
      });
      resuelto = true;
      console.log('[guardar] después de addDoc | path:', docRef.path, '| id:', docRef.id);

      console.log('[guardar] antes de waitForPendingWrites');
      await waitForPendingWrites(db);
      console.log('[guardar] después de waitForPendingWrites');

      const serverSnap = await getDocFromServer(docRef);
      console.log('[guardar] getDocFromServer | exists:', serverSnap.exists(),
        '| data:', serverSnap.data());

      setTexto('');
    } catch (error) {
      console.error('Error al guardar:', error);
    } finally {
      clearTimeout(timeout);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      guardar();
    }
  };

  const formatearFecha = (ms: number) => {
    if (!ms) return '';
    return new Date(ms).toLocaleString('es-AR');
  };

  return (
    <div style={{ padding: 16, maxWidth: 600, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Hoy</h1>
        <button onClick={() => signOut(auth)} style={{ fontSize: 14 }}>Salir</button>
      </div>

      <div style={{ marginBottom: 32 }}>
        <textarea
          placeholder="Capturá algo..."
          value={texto}
          onChange={e => setTexto(e.target.value)}
          onKeyDown={handleKey}
          rows={3}
          style={{ width: '100%', padding: 12, fontSize: 16, boxSizing: 'border-box', resize: 'none' }}
        />
        <button onClick={guardar} style={{ marginTop: 8, padding: '10px 24px', fontSize: 16 }}>
          Guardar
        </button>
      </div>

      <h2>Inbox</h2>
      {capturas.length === 0 && <p style={{ color: '#888' }}>Sin capturas todavía.</p>}
      {capturas.map(c => (
        <div key={c.id} style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
          <p style={{ margin: 0 }}>{c.texto}</p>
          <small style={{ color: '#aaa' }}>{formatearFecha(c.creadoLocal)}</small>
        </div>
      ))}
    </div>
  );
}
