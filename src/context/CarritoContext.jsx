import { createContext, useState } from "react";

export const CarritoContexto = createContext();

const CarritoContextoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (product) => {
    setCarrito([...carrito, product]);
  };
  const removerDelCarrito = () => {};

  return (
    <CarritoContexto.Provider
      value={{
        carrito: carrito,
        agregarAlCarrito: agregarAlCarrito,
        removerDelCarrito: removerDelCarrito,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
};

export default CarritoContextoProvider;
