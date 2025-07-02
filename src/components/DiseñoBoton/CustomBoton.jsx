import './CustomBoton.css'
const CustomBoton = ({nombre}) => {
  return (
        <button className='botonCustom'
        onClick={console.log("hola")}
        >{nombre}</button>
  )
}

export default CustomBoton