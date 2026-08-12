import type { PageId } from '../App';

type HomeProps = {
  onNavigate: (page: PageId) => void;
};

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="card">
      <h1>HackerRPG Web</h1>
      <p>
        Bienvenido al RPG de hackers en la Red Oscura. Infiltrate en sistemas,
        completa misiones y escala en el ranking de la red.
      </p>
      <br />
      <button className="action" type="button" onClick={() => onNavigate('login')}>
        Entrar
      </button>
      <button className="action" type="button" onClick={() => onNavigate('register')}>
        Registrarse
      </button>
    </section>
  );
}
