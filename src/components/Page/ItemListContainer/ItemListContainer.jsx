import Contenido from "../../Common/ProductCard/Contenido";
import Zapatillas from "../../Common/ProductCard/Zapatillas";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
      <h3>Autos de juguete</h3>
      <Contenido />
      <h3>Zapatillas</h3>
      <Zapatillas />
    </div>
  );
};

export default ItemListContainer;
