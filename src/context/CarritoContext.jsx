import { createContext, useState } from "react";

export const CarritoContexto = createContext();

const CarritoContextoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (product) => {
    setCarrito([...carrito, product]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const removerDelCarrito = (id) => {
    let remover = carrito.filter((elemento) => elemento.id !== id);
    setCarrito(remover);
  };
  const cuentaTotal = () => {
    let total = carrito.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.cantidad;
    }, 0);
    return total;
  };
  const cantidadCarrito = () => {
    let totalCantidad = carrito.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return totalCantidad;
  };
  const confirmarCompra = () => {
    let cantidadTotal = { cantidadCarrito };
    alert("Compraste" + cantidadTotal);
  };
  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        agregarAlCarrito,
        removerDelCarrito,
        vaciarCarrito,
        cuentaTotal,
        cantidadCarrito,
        confirmarCompra,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
};

export default CarritoContextoProvider;
