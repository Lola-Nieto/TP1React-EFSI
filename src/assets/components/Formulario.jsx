import React, { useState } from 'react'
import './Formulario.css'


function Formulario({onAgregarCita}) {

    const [formData, setFormData] = useState({
      nombre: '',
      propietario: '',
      fecha: '', 
      hora: '', 
      sintomas: ''
    });
    const [esValido, setEsValido] = useState(true); //Es válido empieza en false

    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevFormData => ({
        ...prevFormData, //sintaxis de propagación --> que solo se actualice el que se cambió (no todos los valores de c/input)
        [name]: value
      }));
      console.log(`campo que cambió: ${name} valor qeu se guardó: ${value}`);
      
    };

 
      /*console.log("(!esValido && ret):" + ((!esValido && ret)))
      console.log("(esValido && !ret):" + ((esValido && !ret))) 
      if((!esValido && ret) || (esValido && !ret)){ //Si variable está en no es válido y sí lo es O si variable está en es válido y no lo es
        setEsValido(!esValido); //Cambio el vALOR de la variable
        console.log("cambia valor de esValido: "+ esValido) //PROBLEMA: no se cambia - cuando deberíacambiarse a true, se pone en false y viceversa
*/
    
    const ValidarForm = () => {
  
      for (let key in formData) {
        if (!formData[key]) {
          console.log('Entra al if de validación - hay 1 valor que no tiene nada ')
          return false;
        }
      }
      return true;
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const valido = ValidarForm();
      setEsValido(valido)
      console.log('esValido: '+esValido)
      if(esValido){
        console.log("Form válido. Data que le mando a App.js: "+ formData);
        onAgregarCita(formData);
      }else{
        console.log("Form inválido. Falta completar campos")
      }
      
    };
  
    return (
      <>
  
            <h2>Crear mi Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input type="text" name="nombre" className="u-full-width" placeholder="Nombre Mascota" value={formData.nombre} onChange={handleChange} />
                
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={formData.propietario} onChange={handleChange} />
                
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={formData.fecha} onChange={handleChange} />
                
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" value={formData.hora} onChange={handleChange} />
                
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" value={formData.sintomas} onChange={handleChange} />
                
                <button type="submit" className="u-full-width button-primary" onClick={handleSubmit} >Agregar Cita</button>
            
                {!esValido && <p>El formulario NO es válido.</p>} 
            </form>


      </>
    )
    // {!esValido && <p>El formulario NO es válido.</p>} se tendría que mostrar solo si eValido = false
    //Por qué se muestra cuando no se debería mostrar
  }

export default Formulario
