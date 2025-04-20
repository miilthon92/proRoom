import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>ProRoom</div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/login" style={styles.link}>Ingresar</Link>
        <Link to="/registro" style={styles.link}>Registro</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: '20px',
    backgroundColor: '#222',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '24px'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Header;