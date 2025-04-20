function Login() {
  return (
    <div className="main-content">
      <h1>Ingresar a ProRoom</h1>
      <form className="formulario">
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;