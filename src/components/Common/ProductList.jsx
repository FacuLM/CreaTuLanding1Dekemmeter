import { traerProductos } from "./BaseDatosProduct";
import { useState, useEffect } from "react";
const ProductList = () => {
  const [desem, setDesem] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productos = await traerProductos();
        setDesem(productos);
      } catch (error) {
        console.error("Se produjo un error, favor de revisar", error);
      }
    };
    obtenerProductos();
  }, []);
};

export default ProductList;
