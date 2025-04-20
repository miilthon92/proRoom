import { loginUser } from '../auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
    navigate('/');
  };

  return (
    <div className="main-content">
      <h1>Ingresar a ProRoom</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;