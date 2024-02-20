
import { useState } from 'react'
import './App.css'
import Componentehijo from './Components/ComponenteHijo/Componentehijo'
import ComponenteNieto from './Components/ComponenteNieto/ComponenteNieto'
import ComponenteUsestate from './Components/ComponenteUseState/ComponenteUsestate'


function App() {

  const [mensaje, setMensaje] =useState("hola soy el mensaje ")
  
  const CambiarMensaje = (msj) => {
    setMensaje(msj);
  };

  return (
    <>
    <div className='componentePadre'>
      <div className="titulo">
      <h1>este es el componente padre que contiene los hijos y las propiedades de estos</h1>
      </div>
  
      <button onClick={(e) => CambiarMensaje("cambie el mensaje usando use state")}>
        cambia el mensaje
      </button>

      <p>{mensaje}</p>

      <Componentehijo nombre="damian" apellido="cardenas" edad={27} />
      
      <ComponenteNieto nombre={"americo"} apellido="villagran" edad={29} > 
      
      <p>hola soy un children de nieto</p>
      <div>
        <p>somos los hijos jiji del componente</p>
      </div>
      </ComponenteNieto>

      <ComponenteUsestate />


 

    </div>
     
    </>
  )
}

export default App
