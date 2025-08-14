import { createContext, useState } from "react";

export const CarritoContexto = createContext();

const CarritoContextoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (product) => {
    setCarrito([...carrito, product]);
  };

  const vaciarCarrito = () => {};

  const removerDelCarrito = (id) => {
    let remover = carrito.filter((elemento) => elemento.id !== id);
    setCarrito(remover);
  };

  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        agregarAlCarrito,
        removerDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
};

export default CarritoContextoProvider;
