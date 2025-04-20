// src/auth.js

// Simular login
export function loginUser() {
    localStorage.setItem('proRoomUser', 'activo');
  }
  
  // Simular logout
  export function logoutUser() {
    localStorage.removeItem('proRoomUser');
  }
  
  // Verificar si está logueado
  export function isUserLoggedIn() {
    return localStorage.getItem('proRoomUser') === 'activo';
  }