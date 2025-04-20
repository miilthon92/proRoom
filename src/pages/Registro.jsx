function Registro() {
  return (
    <div className="main-content">
      <h1>Crear una Cuenta</h1>
      <form className="formulario">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;