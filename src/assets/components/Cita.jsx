import React from 'react'
import './Cita.css'


function Cita({cita}) {

    return (
      <>
      <div className = "cita" >
              <p>Mascota: <span>{cita.mascota}</span></p>
              <p>Dueño: <span>{cita.propietario}</span></p>
              <p>Fecha: <span>{cita.fecha}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Sintomas: <span>{cita.sintomas}</span></p><button className="eliminar">Eliminar ×</button>
      </div>
      </>
    )
  }








export default Cita