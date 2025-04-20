import { Link } from 'react-router-dom';
import '../style.css'; // Importamos el CSS

function Header() {
  return (
    <header>
      <div>
        <h2 style={{ color: 'white', margin: 0 }}>ProRoom</h2>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/login">Ingresar</Link>
        <Link to="/registro">Registro</Link>
      </nav>
    </header>
  );
}

export default Header;