import { useEffect, useState } from "react";
import { productos } from "./ProductosMocks";
import "./Contenido.css";
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
      {autosFiltrados.map((Filtrados) => {
        return (
          <div key={Filtrados.id} className="divContenido">
            <div className="divImg">
              <img src={Filtrados.img} alt="" />
            </div>
            <div className="descripcionTexto">
              <p>$ {Filtrados.precio}</p>
              <p className="nombreProducto">{Filtrados.titulo}</p>
            </div>
            <Link to={`/detalle/${Filtrados.id}`}>
              <CustomBoton nombreBoton="Ver más +" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AutosJuguetes;
