import React, { useContext, useState } from "react";
import { baseDatos } from "../../../fireBaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router";
import "./CheckOut.css";
import { CarritoContexto } from "../../../context/CarritoContext";
const CheckOut = () => {
  const { carrito, cuentaTotal, vaciarCarrito } = useContext(CarritoContexto);
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });
  const [ordenCompra, setOrdenCompra] = useState(null);

  const comprar = (evento) => {
    evento.preventDefault();
    let totalApagar = cuentaTotal();
    let objetosDeCompra = {
      comprador: usuario,
      item: carrito,
      total: totalApagar,
    };
    let ordenes = collection(baseDatos, "ordenesDeCompras");
    let respuesta = addDoc(ordenes, objetosDeCompra);
    respuesta.then((respuesta) => {
      setOrdenCompra(respuesta);
      vaciarCarrito();
    });
  };

  const change = (evento) => {
    setUsuario({
      ...usuario,
      [evento.target.name]: evento.target.value,
    });
  };

  return (
    <div>
      {ordenCompra ? (
        <div className="divConIdDeCompra">
          <h2>Gracias por su compra</h2>
          <h2>TU ORDEN DE COMPRA ES: "{ordenCompra.id}" </h2>
          <Link to="/">
            <button className="botonCustom">INICIO</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={comprar}>
          <div className="divForm">
            <h2>Por favor completa los datos para seguir con la compra</h2>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              required
              onChange={change}
            />
            <input
              type="text"
              placeholder="Apellido"
              name="apellido"
              required
              onChange={change}
            />
            <input
              type="tel"
              placeholder="Telefono"
              name="telefono"
              pattern="[0-9]{10}"
              title="Por favor inserte su numero de telefono"
              required
              onChange={change}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={change}
            />
            <button className="botonCustom">Finalizar Compra</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckOut;
