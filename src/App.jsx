
import React, { useState } from 'react'

import './App.css'
import Formulario from './assets/components/Formulario'
import Listado from './assets/components/Listado'



function App() {
  const [nuevaCita, setNuevaCita] = useState({
    contenido: ''
  });

  const [lista, setLista] = useState([]);

  const sacoDatosDelForm = (data) => {
    console.log("Lo que llega a App.js: "+data)
    setNuevaCita(data)
    console.log("Lo que se guarda en cita en App.js: "+nuevaCita)
    agregarValor()
  }
  
  const agregarValor = () => {

      setLista([...lista, setNuevaCita]); // Usar el operador de propagación para crear una nueva copia del array
      setNuevaCita('');
    
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div id="dosColumnas">
        <div> <Formulario onAgregarCita={sacoDatosDelForm}/> </div> 
        <div><Listado listaCitas={lista} /></div>

          
      </div>
    </>
  )
}

export default App
