import { useContext } from "react";
import { CarritoContexto } from "../../../context/CarritoContext";
import "../CarritoCompras/CarritoCompras.css";
const CarritoCompras = () => {
  const { carrito, vaciarCarrito, removerDelCarrito } =
    useContext(CarritoContexto);
  return (
    <div>
      <div className="divCima">
        <button className="botonCustom" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
      {carrito.map((producto) => {
        return (
          <div className="divCarritoCompras">
            <div className="imgCarrito">
              <img src={producto?.img} alt="" />
            </div>
            <div className="ultdiv">
              <h2>{producto?.titulo}</h2>
              <h2 className="precio">$ {producto?.precio}</h2>
              <h2>x {producto?.cantidad}</h2>
              <div className="divBoton">
                <button
                  className="botonCustom"
                  onClick={() => removerDelCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarritoCompras;
