import '../../assets/style/componenteuse.css'

import{useState} from 'react'

const ComponenteUsestate = () => {

  const [color ,setColor] = useState("red");
  console.log(color)

  const [semaforo,setSemaforo] = useState("green");
  console.log(semaforo)

  const cambiarColorsemaforo = () => {
   
    setSemaforo((colorActual) => (colorActual === 'green' ? 'red' : 'green'));
  };

  return (
    <div>


    <div className='container'>
      <div className='colorcaja' style={{background:color}}>
          
      </div>
    </div>
    
    <p>selecciona un color:<p/>
      <select value={color} onChange={e => setColor(e.target.value)}>
        <option value="lightcoral">lightcoral</option>
        <option value="midnightblue">midnightblue</option>
        <option value="rebeccapurple">rebeccapurple</option>
      </select>

     
  
 
       
     
      <div className='containersemaforo'>
     
        <div className='semaforo' style={{background:semaforo}}> <p>soy un semaforo</p></div>
      </div>

    <button onClick={cambiarColorsemaforo}>Cambiar Color</button>

    </p>
   
  </div>
  )
}

export default ComponenteUsestate