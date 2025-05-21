import React from 'react'
import './Cita.css'


function Cita({citaX, onEliminarCita}) {

    return (
      <>
      {console.log("Lo que llega a cita:" + citaX)}
      <div className = "cita" >

        <p>Mascota: <span>{citaX.nombre}</span></p>
        <p>Dueño: <span>{citaX.propietario}</span></p>
        <p>Fecha: <span>{citaX.fecha}</span></p>
        <p>Hora: <span>{citaX.hora}</span></p>
        <p>Sintomas: <span>{citaX.sintomas}</span></p>
        
        <button className="eliminar" onClick={onEliminarCita}>Eliminar ×</button>
      </div>
      </>
    )
  }








export default Cita