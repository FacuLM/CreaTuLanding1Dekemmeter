import { useContext } from "react";
import { CarritoContexto } from "../../../context/CarritoContext";
import "../CarritoCompras/CarritoCompras.css";
const CarritoCompras = () => {
  const { carrito, vaciarCarrito, removerDelCarrito, cuentaTotal } =
    useContext(CarritoContexto);
  let resultadoCompra = cuentaTotal();
  return (
    <div>
      <div className="divCima">
        <button className="botonCustom" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
      {carrito.map((producto) => {
        return (
          <div key={producto.id} className="divCarritoCompras">
            <div className="imgCarrito">
              <img src={producto?.img} alt="" />
            </div>
            <div className="ultdiv">
              <h2>{producto?.titulo}</h2>
              <h2 className="precio">$ {producto?.precio}</h2>
              <h2 className="cantidad">x {producto?.cantidad}</h2>
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
      <div className="finalDivCompras">
        <div className="total">
          <h2>TOTAL </h2>
          <p>$ {resultadoCompra}</p>
        </div>
        <div>
          <button className="botonCustom">Confirmar</button>
          <button className="botonCustom">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;
