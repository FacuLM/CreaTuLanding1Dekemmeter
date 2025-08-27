import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAoJ7ynYvlKgQWwEAwdCicQ1NmohfROPsc",
  authDomain: "proyectoreact-dekemmeter.firebaseapp.com",
  projectId: "proyectoreact-dekemmeter",
  storageBucket: "proyectoreact-dekemmeter.firebasestorage.app",
  messagingSenderId: "51818611179",
  appId: "1:51818611179:web:dba1a1fd9181b56e9999ae",
};

const backendProductos = initializeApp(firebaseConfig);

export const baseDatos = getFirestore(backendProductos);
