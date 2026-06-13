import { useState, useEffect } from 'react';
import { signOut, type User } from 'firebase/auth';
import {
  collection, addDoc, query, orderBy, onSnapshot, serverTimestamp
} from 'firebase/firestore';
import { auth, db } from '../firebase';

interface Capture {
  id: string;
  texto: string;
  creadoEn: any;
}

export default function Home({ user }: { user: User }) {
  const [texto, setTexto] = useState('');
  const [capturas, setCapturas] = useState<Capture[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'users', user.uid, 'captures'),
      orderBy('creadoEn', 'desc')
    );
    return onSnapshot(q, (snap) => {
      setCapturas(snap.docs.map(d => ({ id: d.id, ...d.data() } as Capture)));
    });
  }, [user.uid]);

  const guardar = async () => {
    if (!texto.trim()) return;
    await addDoc(collection(db, 'users', user.uid, 'captures'), {
      texto: texto.trim(),
      creadoEn: serverTimestamp(),
      estado: 'inbox',
    });
    setTexto('');
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      guardar();
    }
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
          <small style={{ color: '#aaa' }}>
            {c.creadoEn?.toDate?.()?.toLocaleString('es-AR') ?? 'guardando...'}
          </small>
        </div>
      ))}
    </div>
  );
}
