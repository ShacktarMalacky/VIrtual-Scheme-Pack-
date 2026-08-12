import type { PageId } from '../App';

type NavbarProps = {
  current: PageId;
  onNavigate: (page: PageId) => void;
};

const links: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Inicio' },
  { id: 'map', label: 'Mapa' },
  { id: 'missions', label: 'Misiones' },
  { id: 'inventory', label: 'Inventario' },
  { id: 'profile', label: 'Perfil' },
  { id: 'settings', label: 'Ajustes' },
  { id: 'login', label: 'Entrar' },
  { id: 'register', label: 'Registro' },
];

export default function Navbar({ current, onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <button
          key={link.id}
          className={current === link.id ? 'active' : ''}
          onClick={() => onNavigate(link.id)}
          type="button"
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
