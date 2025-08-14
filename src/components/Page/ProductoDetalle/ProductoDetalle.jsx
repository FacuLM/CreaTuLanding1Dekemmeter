import { useEffect, useState } from "react";
import { productos } from "../../Common/ProductCard/ProductosMocks";
import { useParams } from "react-router";
import Counter from "../../Common/Counter/Counter";
import "./ProductoDetalle.css";
const ProductoDetalle = () => {
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
          <Counter producto={producto} />
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
