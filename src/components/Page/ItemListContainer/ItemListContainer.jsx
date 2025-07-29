import AutosJuguetes from "../../Common/ProductCard/AutosJuguetes";
import Zapatillas from "../../Common/ProductCard/Zapatillas";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
      <h3>Autos de juguete</h3>
      <AutosJuguetes />
      <h3>Zapatillas</h3>
      <Zapatillas />
    </div>
  );
};

export default ItemListContainer;
