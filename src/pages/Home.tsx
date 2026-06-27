import { useState, useEffect } from 'react';
import { signOut, type User } from 'firebase/auth';
import {
  collection, addDoc, query, orderBy, getDocFromServer, getDocsFromServer,
  serverTimestamp
} from 'firebase/firestore';
import { auth, db } from '../firebase';

interface Capture {
  id: string;
  texto: string;
  creadoLocal: number;
}

type EstadoGuardado = 'idle' | 'guardando' | 'persistido' | 'error';
type EstadoLectura = 'cargando' | 'confirmada' | 'error';

async function obtenerCapturasDesdeServidor(uid: string): Promise<Capture[]> {
  const capturesQuery = query(
    collection(db, 'users', uid, 'captures'),
    orderBy('creadoLocal', 'desc')
  );
  const snapshot = await getDocsFromServer(capturesQuery);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Capture));
}

export default function Home({ user }: { user: User }) {
  const [texto, setTexto] = useState('');
  const [capturas, setCapturas] = useState<Capture[]>([]);
  const [estadoGuardado, setEstadoGuardado] = useState<EstadoGuardado>('idle');
  const [estadoLectura, setEstadoLectura] = useState<EstadoLectura>('cargando');
  const [mensajeError, setMensajeError] = useState('');

  useEffect(() => {
    let activo = true;

    obtenerCapturasDesdeServidor(user.uid)
      .then(lista => {
        if (!activo) return;
        setCapturas(lista);
        setEstadoLectura('confirmada');
      })
      .catch(error => {
        if (!activo) return;
        console.error('Error al leer desde servidor:', error);
        setEstadoLectura('error');
        setMensajeError('No se pudo confirmar la lectura desde el servidor.');
      });

    return () => {
      activo = false;
    };
  }, [user.uid]);

  const guardar = async () => {
    const textoAGuardar = texto.trim();
    if (!textoAGuardar || estadoGuardado === 'guardando') return;

    setEstadoGuardado('guardando');
    setMensajeError('');
    try {
      const docRef = await addDoc(collection(db, 'users', user.uid, 'captures'), {
        texto: textoAGuardar,
        creadoLocal: Date.now(),
        creadoEn: serverTimestamp(),
        estado: 'inbox',
      });

      const documentoConfirmado = await getDocFromServer(docRef);
      if (!documentoConfirmado.exists()) {
        throw new Error(`El servidor no devolvió el documento ${docRef.path}.`);
      }

      const listaConfirmada = await obtenerCapturasDesdeServidor(user.uid);
      if (!listaConfirmada.some(captura => captura.id === docRef.id)) {
        throw new Error(`La lectura del servidor no incluyó el documento ${docRef.path}.`);
      }

      setCapturas(listaConfirmada);
      setEstadoLectura('confirmada');
      setTexto('');
      setEstadoGuardado('persistido');
    } catch (error) {
      console.error('Error al guardar:', error);
      setEstadoGuardado('error');
      setMensajeError('No se pudo confirmar la persistencia en el servidor.');
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
          onChange={e => {
            setTexto(e.target.value);
            if (estadoGuardado !== 'guardando') setEstadoGuardado('idle');
          }}
          onKeyDown={handleKey}
          rows={3}
          style={{ width: '100%', padding: 12, fontSize: 16, boxSizing: 'border-box', resize: 'none' }}
        />
        <button
          onClick={guardar}
          disabled={estadoGuardado === 'guardando'}
          style={{ marginTop: 8, padding: '10px 24px', fontSize: 16 }}
        >
          {estadoGuardado === 'guardando' ? 'Guardando...' : 'Guardar'}
        </button>
        <div aria-live="polite" style={{ marginTop: 8, minHeight: 20 }}>
          {estadoGuardado === 'persistido' && (
            <span style={{ color: '#287a3d' }}>Persistido en servidor.</span>
          )}
          {estadoGuardado === 'error' && (
            <span style={{ color: '#b42318' }}>{mensajeError}</span>
          )}
        </div>
      </div>

      <h2>Inbox</h2>
      {estadoLectura === 'cargando' && <p>Consultando servidor...</p>}
      {estadoLectura === 'confirmada' && (
        <p style={{ color: '#287a3d' }}>Lectura confirmada desde servidor.</p>
      )}
      {estadoLectura === 'error' && (
        <p style={{ color: '#b42318' }}>{mensajeError}</p>
      )}
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
