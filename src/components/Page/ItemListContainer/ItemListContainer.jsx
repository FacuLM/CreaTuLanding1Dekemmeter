import "./ItemListContainer.css";

import CustomBoton from "../../Common/DiseñoBoton/CustomBoton";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { baseDatos } from "../../../fireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const { catalogo } = useParams();

  useEffect(() => {
    let todosLosProductos = collection(baseDatos, "productosEnStock");
    let preguntarPorProducto = todosLosProductos;

    if (catalogo) {
      let productosFiltrados = query(
        todosLosProductos,
        where("categoria", "==", catalogo)
      );
      preguntarPorProducto = productosFiltrados;
    }
    let traerLosProductos = getDocs(preguntarPorProducto);
    traerLosProductos.then((respuesta) => {
      let objetos = respuesta.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setProducto(objetos);
    });
  }, [catalogo]);

  return (
    <div className="ItemListContainer">
      <div className="divJuguete">
        {producto.map((filtrados) => {
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
    </div>
  );
};

export default ItemListContainer;
