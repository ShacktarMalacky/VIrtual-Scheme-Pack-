import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Map from './pages/Map';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Loading from './components/Loading';

export type PageId =
  | 'home'
  | 'inventory'
  | 'login'
  | 'map'
  | 'missions'
  | 'profile'
  | 'register'
  | 'settings';

function App() {
  const [page, setPage] = useState<PageId>('home');
  const [loading, setLoading] = useState(true);

  useState(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  });

  if (loading) {
    return <Loading />;
  }

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={setPage} />;
      case 'inventory':
        return <Inventory />;
      case 'login':
        return <Login onNavigate={setPage} />;
      case 'map':
        return <Map />;
      case 'missions':
        return <Missions />;
      case 'profile':
        return <Profile />;
      case 'register':
        return <Register onNavigate={setPage} />;
      case 'settings':
        return <Settings />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar current={page} onNavigate={setPage} />
      <main className="main">{renderPage()}</main>
    </div>
  );
}

export default App;
