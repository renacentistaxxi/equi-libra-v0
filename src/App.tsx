import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from './firebase';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Cargando...</div>;
  if (!user) return <Login />;
  console.log('Montando Home para:', user.uid);
  return <Home user={user} />;
}

export default App;
