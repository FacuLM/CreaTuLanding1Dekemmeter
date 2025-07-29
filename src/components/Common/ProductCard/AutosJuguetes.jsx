import { useEffect, useState } from "react";
import "./Contenido.css";
import { productos } from "./productosMocks";
import CustomBoton from "../DiseñoBoton/CustomBoton";
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
    <div className="divAutoJuguete">
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
            <CustomBoton nombreBoton="Agregar +" />
          </div>
        );
      })}
    </div>
  );
};

export default AutosJuguetes;
