
import React, { useState } from 'react'

import './App.css'
import Formulario from './assets/components/Formulario'
import Listado from './assets/components/Listado'

function App() {
  const [lista, setLista] = useState([]);

  const sacoDatosDelForm = (data) => {
    console.log("Lo que llega a App.js:", data);
      setLista([...lista, data]); // Usar el operador de propagación para crear una nueva copia del array
  }

  const reemplazarLista = (nuevaLista) => {
    setLista(nuevaLista);
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div id="dosColumnas">
        <div> <Formulario onAgregarCita={sacoDatosDelForm}/> </div> 
        <div><Listado listaCitas={lista} onEliminarCita={reemplazarLista} /></div>
      </div>
    </>
  );
}

export default App
