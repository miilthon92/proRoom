import { Link, useNavigate } from 'react-router-dom';
import { isUserLoggedIn, logoutUser } from '../auth';
import { useState, useEffect } from 'react';
import '../style.css';

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogged(isUserLoggedIn());
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsLogged(false);
    navigate('/');
  };

  return (
    <header>
      <div>
        <h2 style={{ color: 'white', margin: 0 }}>ProRoom</h2>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/eventos">Eventos</Link> {/* Nuevo Link */}
        {isLogged ? (
          <>
            <Link to="/perfil">Mi Perfil</Link>
            <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Ingresar</Link>
            <Link to="/registro">Registro</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;