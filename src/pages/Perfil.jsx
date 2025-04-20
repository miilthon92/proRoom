import { obtenerEventosComprados } from '../eventos';

function Perfil() {
  const eventosComprados = obtenerEventosComprados();

  return (
    <div className="main-content">
      <h1>Mi Perfil</h1>
      <p>Bienvenido a tu perfil en ProRoom.</p>

      <h2>Mis Eventos Comprados:</h2>

      {eventosComprados.length === 0 ? (
        <p>No has comprado ningún evento todavía.</p>
      ) : (
        <div className="eventos-grid">
          {eventosComprados.map((evento, index) => (
            <div key={index} className="evento-card">
              <h2>{evento.titulo}</h2>
              <p>{evento.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Perfil;