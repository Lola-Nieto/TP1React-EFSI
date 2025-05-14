import './Cita.jsx'
import React, {useState} from 'react'
import './Listado.css'
import Cita from './Cita.jsx'



function Listado({onMostrarListado}) {

    
    return (
      <>
      <div className = "lista-citas">
          <h2>Administra tus citas</h2>
          <ul>
            {onMostrarListado.map((cita) => (
              <li><Cita onMostrarCita={cita} /> </li>
            ))}
          </ul>
      </div>
      </>
    )
  }



export default Listado
