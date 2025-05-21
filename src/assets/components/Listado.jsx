import './Cita.jsx'
import React from 'react'
import './Listado.css'
import Cita from './Cita.jsx'



function Listado(props) {

  let lista = props.listaCitas;
  console.log("lista: "+lista)

  const eliminarCita = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index); //función para que se cree una copia y esta sea la que se modifica
    props.onEliminarCita(nuevaLista);
  };
  

    return (
      <>
      <h2>Administra tus citas</h2>
      <div className = "lista-citas">
        
        {lista.length > 0 &&
          lista.map((cita, index) => (
          <Cita key={index} citaX={cita} onEliminarCita={() => eliminarCita(index)}/> 
          ))
        }

            
          
      </div>
      </>
    )
  }



export default Listado
