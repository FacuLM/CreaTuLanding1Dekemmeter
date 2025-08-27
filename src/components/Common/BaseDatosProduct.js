import { baseDatos } from "../../fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";

let coleccionDeProductos = collection(baseDatos, "productosEnStock");

export let traerProductos = async () => {
  try {
    const respuesta = await getDocs(coleccionDeProductos);
    let array = respuesta.docs.map((elemento) => {
      return { id: elemento.id, ...elemento.data() };
    });
    return array;
  } catch (error) {
    console.error("Se produjo un error", error);
    return [];
  }
};
