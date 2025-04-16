import './Cita.jsx'
import React from 'react'
import './Listado.css'
import Cita from './Cita.jsx'



function Listado() {

    return (
      <>
      <div className = "lista-citas">
            <h2>Administra tus citas</h2>
            <Cita 
            cita = {{mascota : 'Nina', propietario : 'Martin', fecha : '2021-08-05', hora : '08:20', sintomas : 'Le duele la pierna' }}
            />
            <Cita 
            cita = {{mascota : 'Sifon', propietario : 'Flecha', fecha : '2023-08-05', hora : '09:24', sintomas : 'Duerme mucho' }}
            />
            <Cita 
            cita = {{mascota : 'Floki', propietario : 'Ari', fecha : '2023-08-05', hora : '16:15', sintomas : 'No está comiendo' }}
            />
      </div>
      </>
    )
  }



export default Listado
