import { useEffect, useState } from "react";
import { productos } from "../../../../productosMocks.js";
import CustomBoton from "../DiseñoBoton/CustomBoton.jsx";
import "./Contenido.css";
const Contenido = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const traerProductos = new Promise((resolve) => {
      resolve(productos);
    });
    traerProductos.then((res) => setItems(res));
  }, []);
  console.log(items);

  return (
    <div>
      <div className="divAutoJuguete">
        {items.map((elemento) => {
          return (
            <div className="divContenido">
              <div className="divImg">
                <img src={elemento.img} alt="" />
              </div>
              <div className="descripcionTexto">
                <p>$ {elemento.precio}</p>
                <p className="nombreProducto">{elemento.titulo}</p>
              </div>
              <CustomBoton props="Agregar" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contenido;
