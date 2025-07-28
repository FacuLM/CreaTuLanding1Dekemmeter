import "./CarWidget.css";
import { GoArchive } from "react-icons/go";
const CarWidget = () => {
  return (
    <div className="relative cursor-pointer p-1.5 bg-gray-100 rounded">
      <GoArchive />
      <spam className="Contador absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
        0
      </spam>
    </div>
  );
};

export default CarWidget;
