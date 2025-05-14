
import React from 'react'

import './App.css'
import Formulario from './assets/components/Formulario'
import Listado from './assets/components/Listado'



function App() {
  const sacoDatosDelForm = (data) => {
    console.log("Lo que llega a App.js: "+data)
  }
  return (
    <>
<h1>ADMINISTRADOR DE PACIENTES</h1>
<div id="dosColumnas">
    <div> <Formulario onAgregarTarjeta={sacoDatosDelForm}/> </div> //Hacer onAgregarTarjeta
    <div><Listado /></div>
    </div>
    </>
  )
}

export default App
