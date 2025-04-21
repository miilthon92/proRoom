import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirige al inicio después del login exitoso
    } catch (error) {
      setError('Error al ingresar: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Ingresar</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  }
};

export default Login;