import { useContext } from "react";
import "./CarWidget.css";
import { GoArchive } from "react-icons/go";
import { CarritoContexto } from "../../../context/CarritoContext";
const CarWidget = () => {
  const { carrito } = useContext(CarritoContexto);
  console.log(carrito);
  return (
    <div className="relative cursor-pointer p-1.5 bg-gray-100 rounded">
      <GoArchive />
      <spam className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
        {carrito.length}
      </spam>
    </div>
  );
};

export default CarWidget;
