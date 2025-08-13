import { useContext, useEffect, useState } from "react";
import { productos } from "../../Common/ProductCard/ProductosMocks";
import { useParams } from "react-router";
import "./ProductoDetalle.css";
import { CarritoContexto } from "../../../context/CarritoContext";
const ProductoDetalle = () => {
  const { agregarAlCarrito } = useContext(CarritoContexto);

  const { id } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    const elemento = productos.find((productoArray) => productoArray.id === id);
    setProducto(elemento);
  }, [id]);

  return (
    <div className="productosDetalladoscss">
      <div className="imgProductoDetallado">
        <img src={producto?.img} />
      </div>
      <div>
        <div className="marcoDetalle">
          <p>{producto?.titulo}</p>
          <p>{producto?.descripcion}</p>
          <p>${producto?.precio}</p>
        </div>
        <button
          className="botonCustom"
          onClick={() => {
            agregarAlCarrito(producto);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductoDetalle;
