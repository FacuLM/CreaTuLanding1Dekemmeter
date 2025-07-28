import { useEffect, useState } from "react";
import { productos } from "./ProductosMocks";
import "./Contenido.css";
import CustomBoton from "../DiseñoBoton/CustomBoton";
const Zapatillas = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resuelva) => {
      resuelva(productos);
    });
    obtenerProductos.then((res) => setItems(res));
  }, []);

  const zapatillasFiltradas = items.filter((zapatillas) => {
    zapatillas.categoria.includes("zapatillas");
    return zapatillas.categoria && zapatillas.categoria.includes("zapatillas");
  });
  return (
    <div className="divAutoJuguete">
      {zapatillasFiltradas.map((producto) => {
        return (
          <div className="divContenido">
            <div className="divImg">
              <img src={producto.img} alt="" />
            </div>
            <div className="descripcionTexto">
              <p>$ {producto.precio}</p>
              <p className="nombreProducto">{producto.titulo}</p>
            </div>
            <CustomBoton nombreBoton="Agregar +" />
          </div>
        );
      })}
    </div>
  );
};

export default Zapatillas;
