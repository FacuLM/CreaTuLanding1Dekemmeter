import './Section.css'
import CustomBoton from "../components/DiseñoBoton/CustomBoton";
const Section = () => {
    return (
    <section>
        <div className="divSection">
        <h3>Auto De Juguete</h3>
        <CustomBoton
        nombre="Ver más" 
        funcion={()=>{console.log("Hola")}}
        />
        </div>
        <div className='divAutoJuguete'>
            <div>
                <img src="https://http2.mlstatic.com/D_NQ_NP_923952-MLA76963626019_062024-O.webp" alt="" />
                <CustomBoton nombre="Agregar"/>
            </div>
            <div>
                <img src="https://felcraft.com/wp-content/uploads/2020/07/AB5188-01-negro-600x600.jpg" alt="" />
                <CustomBoton nombre="Agregar"/>
            </div>
            <div>
                <img src="https://acdn-us.mitiendanube.com/stores/001/100/722/products/f1-colapa-01-0e8228777c9d3742e917339284050339-640-0.jpg" alt="" />
                <CustomBoton nombre="Agregar"/>
            </div>
        </div>
    </section>
)
}
export default Section