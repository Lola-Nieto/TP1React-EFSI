import React from 'react'
import './Cita.css'


function Cita({onMostrarCita}) {

    return (
      <>
      {console.log("Lo que llega a cita:" + onMostrarCita)}
      <div className = "cita" >

        <p>Mascota: <span>{onMostrarCita.nombre}</span></p>
        <p>Dueño: <span>{onMostrarCita.propietario}</span></p>
        <p>Fecha: <span>{onMostrarCita.fecha}</span></p>
        <p>Hora: <span>{onMostrarCita.hora}</span></p>
        <p>Sintomas: <span>{onMostrarCita.sintomas}</span></p><button className="eliminar">Eliminar ×</button>
      </div>
      </>
    )
  }








export default Cita