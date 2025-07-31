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

  const zapatillasFiltradas = items.filter((zapatilla) => {
    zapatilla.categoria.includes("zapatillas");
    return zapatilla.categoria && zapatilla.categoria.includes("zapatillas");
  });

  return (
    <div className="divJuguete">
      {zapatillasFiltradas.map((zapatillasFiltradas) => {
        return (
          <div key={zapatillasFiltradas.id} className="divContenido">
            <div className="divImg">
              <img src={zapatillasFiltradas.img} alt="" />
            </div>
            <div className="descripcionTexto">
              <p>$ {zapatillasFiltradas.precio}</p>
              <p className="nombreProducto">{zapatillasFiltradas.titulo}</p>
            </div>
            <CustomBoton nombreBoton="Ver más +" />
          </div>
        );
      })}
    </div>
  );
};

export default Zapatillas;
