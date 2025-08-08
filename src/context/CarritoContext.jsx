import React, { createContext } from "react";

const CarritoContexto = createContext();
const CarritoContextoProvider = ({ children }) => {
  return <CarritoContexto.Provider>{children}</CarritoContexto.Provider>;
};

export default CarritoContextoProvider;
