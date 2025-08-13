import { useEffect, useState } from "react";
import { productos } from "./ProductosMocks";
import "./Contenido.css";
import CustomBoton from "../DiseñoBoton/CustomBoton";
import { Link } from "react-router";
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
      {zapatillasFiltradas.map((filtrados) => {
        return (
          <div key={filtrados.id} className="divContenido">
            <div className="divImg">
              <img src={filtrados.img} alt="" />
            </div>
            <div className="descripcionTexto">
              <p>$ {filtrados.precio}</p>
              <p className="nombreProducto">{filtrados.titulo}</p>
            </div>
            <Link to={`/detalle/${filtrados.id}`}>
              <CustomBoton nombreBoton="Ver más +" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Zapatillas;
