import './Cita.jsx'
import React, {useState} from 'react'
import './Listado.css'
import Cita from './Cita.jsx'



function Listado(props) {

  const lista = props.listaCitas;

    return (
      <>
      <div className = "lista-citas">
          <h2>Administra tus citas</h2>
          <ul>
            {lista.map((cita) => (
              <li key={index}><Cita citaX={cita} /> </li>
            ))}
          </ul>
      </div>
      </>
    )
  }



export default Listado
