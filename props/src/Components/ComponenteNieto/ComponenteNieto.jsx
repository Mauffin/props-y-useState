import '../../assets/style/componentenieto.css'


const ComponenteNieto = ({nombre,apellido,edad,children}) => {
  return (
    <div className="componentenieto">
      <h1>Componente Nieto</h1>
      <p>nombre:{nombre}</p>
      <p>apellido:{apellido}</p>
      <p>edad:{edad}</p>
      {children}
    </div>
  )
}

export default ComponenteNieto