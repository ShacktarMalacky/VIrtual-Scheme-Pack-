import { useState } from 'react';
import type { PageId } from '../App';
import { isFirebaseConfigured } from '../services/firebase';

type LoginProps = {
  onNavigate: (page: PageId) => void;
};

export default function Login({ onNavigate }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isFirebaseConfigured()) {
      alert('Configuración de Firebase no disponible. Define las variables VITE_FIREBASE_* en Vercel.');
      return;
    }
    console.log('Login solicitado para', email);
  };

  return (
    <section className="card">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className="action" type="submit">
          Entrar
        </button>
      </form>
      <br />
      {!isFirebaseConfigured() && (
        <p className="error">
          Firebase no está configurado: define las variables de entorno
          VITE_FIREBASE_* en Vercel.
        </p>
      )}
      <br />
      <button
        className="action"
        type="button"
        onClick={() => onNavigate('register')}
      >
        ¿No tienes cuenta? Regístrate
      </button>
    </section>
  );
}
