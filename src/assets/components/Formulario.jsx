import React, { useState } from 'react'
import './Formulario.css'


function Formulario({meLlevoValores}) {

  function MyForm() {
    const [formData, setFormData] = useState({
      nombre: '',
      propietario: '',
      fecha: '', 
      hora: '', 
      sintomas: ''
    });
    const [esValido, setEsValido] = useState(false);

    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevFormData => ({
        ...prevFormData, //sintaxis de propagación --> que solo se actualice el que se cambió (no todos los valores de c/input)
        [name]: value
      }));
    };
    const ValidarForm(){
      
      setEsValido(true)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if(ValidarForm(() =>{
        
      }
      )){
        console.log("Form válido. Data que le mando a App.js: "+ formData);
        meLlevoValores(formData);
      }
      
    };
  
    return (
      <>
  
            <h2>Crear mi Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input type="text" name="nombre" class="u-full-width" placeholder="Nombre Mascota" value={formData.nombre} onChange={handleChange}/>
                
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value={formData.propietario} onChange={handleChange}/>
                
                <label>Fecha</label>
                <input type="date" name="fecha" class="u-full-width" value={formData.fecha} onChange={handleChange}/>
                
                <label>Hora</label>
                <input type="time" name="hora" class="u-full-width" value={formData.hora} onChange={handleChange}/>
                
                <label>Sintomas</label>
                <textarea name="sintomas" class="u-full-width" value={formData.sintomas} onChange={handleChange}/>
                
                <button type="submit" class="u-full-width button-primary" onClick={handleSubmit} disabled={!esValido}>Agregar Cita</button>
            
                {esValido && <p>El formulario es válido.</p>}
            </form>

      </>
    )
  }

export default Formulario
