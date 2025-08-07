import { Link } from "react-router";
import CarWidget from "../../Common/CarWidget/CarWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>
            Mercado
            <br />
            Pepito
          </h1>
        </Link>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
            />
          </li>
          <li>
            <Link to="/Categoria/autos">AUTOS</Link>
          </li>
          <li>
            <Link to="/Categoria/zapatillas">ZAPATILLAS</Link>
          </li>
          <div className="icono-caja">
            <CarWidget />
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
