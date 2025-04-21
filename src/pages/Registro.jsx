import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado exitosamente');
      navigate('/login'); // redirecciona al login después de registrar
    } catch (error) {
      console.error('Error registrando el usuario', error.message);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegistro}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;