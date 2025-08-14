import { useContext, useState } from "react";
import { CarritoContexto } from "../../../context/CarritoContext";
import "../Counter/Counter.css";
const Counter = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CarritoContexto);
  const [contador, setContador] = useState(1);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const agregar = () => {
    let productoCantidad = { ...producto, cantidad: contador };
    agregarAlCarrito(productoCantidad);
  };

  return (
    <div>
      <div>
        <h2>Cantidad: {contador}</h2>
      </div>
      <div className="botonesCounter">
        <button className="botonCustom" onClick={sumar}>
          Agregar
        </button>
        <button
          className="botonCustom"
          onClick={restar}
          disabled={contador === 1}
        >
          Eliminar
        </button>
        <button
          className="botonCustom"
          onClick={() => {
            agregar(contador);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
