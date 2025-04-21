import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1DYIWz8oyyBphion3oQZa8MnJ4HR4YH0",
  authDomain: "proroom-b5aea.firebaseapp.com",
  projectId: "proroom-b5aea",
  storageBucket: "proroom-b5aea.appspot.com",
  messagingSenderId: "49808156718",
  appId: "1:49808156718:web:5861bd367a86ff676997bf",
  measurementId: "G-6ZG66370Y3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar autenticación
const auth = getAuth(app);

export { auth };