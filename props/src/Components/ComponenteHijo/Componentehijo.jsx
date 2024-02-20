import '../../assets/style/componentehijo.css'



const Componentehijo = ({nombre,apellido,edad}) => {

  return (
    <div className="componentehijo">
      <h1>Componente hijo</h1>
      <p>nombre:{nombre}</p>
      <p>apellido:{apellido}</p>
      <p>edad:{edad}</p>
    </div>
  )
}

export default Componentehijo