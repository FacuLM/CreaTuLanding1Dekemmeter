import { useEffect, useState } from "react";
import "./Contenido.css";
import { productos } from "./productosMocks";
import CustomBoton from "../DiseñoBoton/CustomBoton";
import { Link } from "react-router";
const AutosJuguetes = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resuelva) => {
      resuelva(productos);
    });
    obtenerProductos.then((res) => setItems(res));
  }, []);
  const autosFiltrados = items.filter((autos) => {
    autos.categoria.includes("autos");
    return autos.categoria && autos.categoria.includes("autos");
  });

  return (
    <div className="divJuguete">
      {autosFiltrados.map((autosFiltrados) => {
        return (
          <div key={autosFiltrados.id} className="divContenido">
            <div className="divImg">
              <img src={autosFiltrados.img} alt="" />
            </div>
            <div className="descripcionTexto">
              <p>$ {autosFiltrados.precio}</p>
              <p className="nombreProducto">{autosFiltrados.titulo}</p>
            </div>
            <Link to={`/detalle/${autosFiltrados.id}`}>
              <CustomBoton nombreBoton="Ver más +" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AutosJuguetes;
