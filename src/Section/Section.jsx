import './Section.css'
import CustomBoton from "../components/DiseñoBoton/CustomBoton";
import Contenido from './Contenido';
const Section =()=>{
    return (
    <section>
        <div className="divSection">
            <div className='divdiv'>
                <h3>Autos De Juguete</h3>
            </div>
            <Contenido/>
        </div>
    </section>
)
}
export default Section