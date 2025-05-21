import React from 'react'
import './Cita.css'


function Cita({props}) {

  const cita = props.citaX;
    return (
      <>
      {console.log("Lo que llega a cita:" + cita)}
      <div className = "cita" >

        <p>Mascota: <span>{cita.nombre}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        
        <button className="eliminar">Eliminar ×</button>
      </div>
      </>
    )
  }








export default Cita