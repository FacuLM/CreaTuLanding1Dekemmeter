import './CustomBoton.css'
const CustomBoton = ({nombre,funcion}) => {
  return (
        <button className='botonCustom' onClick={funcion}>
          {nombre}
          
        </button>
  )
}

export default CustomBoton