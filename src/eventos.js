// src/eventos.js

// Guardar evento en localStorage
export function guardarEventoComprado(evento) {
    const eventosGuardados = JSON.parse(localStorage.getItem('eventosComprados')) || [];
    eventosGuardados.push(evento);
    localStorage.setItem('eventosComprados', JSON.stringify(eventosGuardados));
  }
  
  // Obtener eventos comprados
  export function obtenerEventosComprados() {
    return JSON.parse(localStorage.getItem('eventosComprados')) || [];
  }