import React, { useState } from "react";
import { Link } from "react-router";
import "./CheckOut.css";
const CheckOut = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });
  const comprar = (evento) => {
    evento.preventDefault();
    console.log(usuario);
  };
  const change = (evento) => {
    setUsuario({
      ...usuario,
      [evento.target.name]: evento.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={comprar}>
        <div className="divForm">
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
    </div>
  );
};

export default CheckOut;
