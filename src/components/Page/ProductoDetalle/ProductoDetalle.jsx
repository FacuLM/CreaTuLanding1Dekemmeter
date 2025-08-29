import { useParams } from "react-router";
import Counter from "../../Common/Counter/Counter";
import "./ProductoDetalle.css";
import { baseDatos } from "../../../fireBaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
const ProductoDetalle = () => {
  const [elementoProductos, setElementoProductos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let coleccion = collection(baseDatos, "productosEnStock");
    let coleccionFil = doc(coleccion, id);
    getDoc(coleccionFil).then((respuesta) => {
      setElementoProductos({ id: coleccionFil.id, ...respuesta.data() });
    });
  }, [id]);
  return (
    <div className="productosDetalladoscss">
      <div className="imgProductoDetallado">
        <img src={elementoProductos?.img} />
      </div>
      <div>
        <div className="marcoDetalle">
          <p>{elementoProductos?.titulo}</p>
          <p>{elementoProductos?.descripcion}</p>
          <p>${elementoProductos?.precio}</p>
          <Counter producto={elementoProductos} />
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
