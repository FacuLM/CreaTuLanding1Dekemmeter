import { useContext, useState } from "react";
import { CarritoContexto } from "../../../context/CarritoContext";
import "../Counter/Counter.css";
const Counter = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CarritoContexto);
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const agregar = () => {
    if (contador === 0) {
      alert("No tienes ningun producto en el carrito");
    } else {
      let productoCantidad = { ...producto, cantidad: contador };
      agregarAlCarrito(productoCantidad);
      setContador(0);
    }
  };
  return (
    <div>
      <div>
        <h2>Cantidad: {contador}</h2>
      </div>
      <div className="botonesCounter">
        <button
          className="botonCustom"
          onClick={sumar}
          disabled={contador === 10}
        >
          Sumar
        </button>
        <button
          className="botonCustom"
          onClick={restar}
          disabled={contador === 0}
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
