import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (e: any) {
        setError(e.message);
      }
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 400, margin: '80px auto' }}>
      <h1>EQUI-LIBRA</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 12, padding: 8, fontSize: 16 }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 12, padding: 8, fontSize: 16 }}
      />
      {error && <p style={{ color: 'red', fontSize: 14 }}>{error}</p>}
      <button onClick={handleLogin} style={{ padding: '10px 24px', fontSize: 16 }}>
        Entrar
      </button>
    </div>
  );
}
