import { Link } from "react-router";
import CarWidget from "../../Common/CarWidget/CarWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <nav>
        <h1>
          Mercado
          <br />
          Pepito
        </h1>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
            />
          </li>
          <li>
            <a href="">AUTOS</a>
          </li>
          <li>
            <a href="">ZAPATILLAS</a>
          </li>
          <Link to="/carrito">
            <div className="icono-caja">
              <CarWidget />
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
