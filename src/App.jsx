
import React from 'react'

import './App.css'
import Formulario from './assets/components/Formulario'
import Listado from './assets/components/Listado'



function App() {

  return (
    <>
<h1>ADMINISTRADOR DE PACIENTES</h1>
<div id="dosColumnas">
    <div> <Formulario/></div>
    <div><Listado /></div>
    </div>
    </>
  )
}

export default App
