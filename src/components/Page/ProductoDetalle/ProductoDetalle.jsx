import { useEffect, useState } from "react";
import { productos } from "../../Common/ProductCard/ProductosMocks";
import { useParams } from "react-router";
import "./ProductoDetalle.css";
import CustomBoton from "../../Common/DiseñoBoton/CustomBoton";
const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    const elemento = productos.find((productoArray) => productoArray.id === id);
    setProducto(elemento);
  }, [id]);

  return (
    <div>
      <div className="productosDetalladoscss">
        <div className="imgProductoDetallado">
          <img src={producto?.img} alt="" />
        </div>
        <div>
          <h2>{producto?.titulo}</h2>
          <h2>{producto?.precio}</h2>
          <CustomBoton nombreBoton="Agregar al carrito" />
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
