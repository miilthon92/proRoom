import { guardarEventoComprado } from '../eventos';

function EventosPublicos() {
  const eventos = [
    { id: 1, titulo: "Curso de Programación", descripcion: "Aprendé a programar en 4 semanas." },
    { id: 2, titulo: "Taller de Fotografía", descripcion: "Domina tu cámara y saca fotos increíbles." },
    { id: 3, titulo: "Seminario de Marketing Digital", descripcion: "Lleva tu negocio a otro nivel." }
  ];

  const handleComprar = (evento) => {
    guardarEventoComprado(evento);
    alert(`¡Compraste el evento: ${evento.titulo}!`);
  };

  return (
    <div className="main-content">
      <h1>Eventos Disponibles</h1>
      <div className="eventos-grid">
        {eventos.map((evento) => (
          <div key={evento.id} className="evento-card">
            <h2>{evento.titulo}</h2>
            <p>{evento.descripcion}</p>
            <button onClick={() => handleComprar(evento)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventosPublicos;