import { useParams } from "react-router";
import Counter from "../../Common/Counter/Counter";
import "./ProductoDetalle.css";
const ProductoDetalle = () => {
  const { id } = useParams();
  const elemento = desem.find((productoArray) => productoArray.id === id);
  elemento;

  return (
    <div className="productosDetalladoscss">
      <div className="imgProductoDetallado">
        <img src={elemento?.img} />
      </div>
      <div>
        <div className="marcoDetalle">
          <p>{elemento?.titulo}</p>
          <p>{elemento?.descripcion}</p>
          <p>${elemento?.precio}</p>
          <Counter producto={elemento} />
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
