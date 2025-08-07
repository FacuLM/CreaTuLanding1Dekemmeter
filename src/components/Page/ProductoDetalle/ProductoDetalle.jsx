import { useEffect, useState } from "react";
import { productos } from "../../Common/ProductCard/ProductosMocks";
import { useParams } from "react-router";
import "./ProductoDetalle.css";
const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    const elemento = productos.find((productoArray) => productoArray.id === id);
    setProducto(elemento);
  }, [id]);

  return (
    <div>
      <div className="imgProductoDetallado">
        <img src={producto?.img} alt="" />
      </div>
      <h2>{producto?.titulo}</h2>
      <h2>{producto?.precio}</h2>
    </div>
  );
};

export default ProductoDetalle;
