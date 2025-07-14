import CustomBoton from "../components/DiseñoBoton/CustomBoton";
import "./Contenido.css";
import "./Section.jsx";
const Contenido = () => {
  return (
    <div className="divAutoJuguete">
      <div className="divContenido">
        <div className="divImg">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_923952-MLA76963626019_062024-O.webp"
            alt=""
          />
        </div>
        <div className="descripcionTexto">
          <p>$ 15000</p>
          <p className="nombreProducto">Robot Auto Policia</p>
        </div>
        <CustomBoton nombre="Agregar" />
      </div>
      <div className="divContenido">
        <div className="divImg">
          <img
            src="https://jugueterialatorre.com.ar/wp-content/uploads/167422214386f53f206877e8583ca85caa76485a01.jpg"
            alt=""
          />
        </div>
        <div className="descripcionTexto">
          <p>$ 10000</p>
          <p className="nombreProducto">Auto Lamborghini Verde</p>
        </div>
        <CustomBoton nombre="Agregar" />
      </div>
      <div className="divContenido">
        <div className="divImg">
          <img
            src="https://felcraft.com/wp-content/uploads/2020/07/AB5188-01-negro-600x600.jpg"
            alt=""
          />
        </div>
        <div className="descripcionTexto">
          <p>$ 15000</p>
          <p className="nombreProducto">Auto Coupe Negro</p>
        </div>
        <CustomBoton nombre="Agregar" />
      </div>
      <div className="divContenido">
        <div className="divImg">
          <img
            src="https://www.quuot.com.ar/6246-large_default/pista-de-autos-de-carreras-vuelta-de-campeones-rojos-go.jpg"
            alt=""
          />
        </div>
        <div className="descripcionTexto">
          <p>$ 30000</p>
          <p className="nombreProducto">2 Autos Modelo F1 Rojo</p>
        </div>
        <CustomBoton nombre="Agregar" />
      </div>
      <div className="divContenido">
        <div className="divImg">
          <img
            src="https://felcraft.com/wp-content/uploads/2020/07/AB5188-01.jpg"
            alt=""
          />
        </div>
        <div className="descripcionTexto">
          <p>$ 5000</p>
          <p className="nombreProducto">Auto Rojo</p>
        </div>
        <CustomBoton nombre="Agregar" />
      </div>
      <div className="divContenido">
        <div className="divImg">
          <img
            src="https://acdn-us.mitiendanube.com/stores/001/100/722/products/f1-colapa-01-0e8228777c9d3742e917339284050339-640-0.jpg"
            alt=""
          />
        </div>
        <div className="descripcionTexto">
          <p>$ 15000</p>
          <p className="nombreProducto">Auto Modelo F1 Azul</p>
        </div>
        <CustomBoton nombre="Agregar" />
      </div>
    </div>
  );
};

export default Contenido;
