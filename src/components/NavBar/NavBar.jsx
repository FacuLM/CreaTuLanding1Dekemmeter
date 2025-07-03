import CarWidget from '../CarWidget/CarWidget'
import './NavBar.css'
const NavBar=()=>{
    return <header>
        <nav>
            <h1>
                Mercado
                <br />
                Pepito
            </h1>
            <ul>
                <li>
                    <input type="text" placeholder="Buscar productos, marcas y más..."/>
                </li>
                <li>
                    <a href="">PRODUCTOS</a>
                </li>
                <div className="icono-caja">
                    <CarWidget/>
                </div>
            </ul>
        </nav>
</header>
}
export default NavBar