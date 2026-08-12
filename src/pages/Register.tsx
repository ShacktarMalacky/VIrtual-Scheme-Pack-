import { useState } from 'react';
import type { PageId } from '../App';

type RegisterProps = {
  onNavigate: (page: PageId) => void;
};

export default function Register({ onNavigate }: RegisterProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Registro solicitado para', username, email);
  };

  return (
    <section className="card">
      <h2>Registro de Hacker</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
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
          Registrarse
        </button>
      </form>
      <br />
      <button
        className="action"
        type="button"
        onClick={() => onNavigate('login')}
      >
        Ya tengo cuenta
      </button>
    </section>
  );
}
