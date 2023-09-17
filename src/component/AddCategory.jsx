import { useState } from "react"
import PropTypes from 'prop-types';



export const AddCategory = ({ onNewCategory }) => {

const [inputValue, setInputValue] = useState('')

const onInputChange = ({ target })=>{
    setInputValue( target.value )
}

const onSubmit = ( event )=>{
    event.preventDefault(); 
    if(inputValue.trim().length <= 1)return; 
    const letter = (inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase() ); 
   
    onNewCategory( letter ); 
    setInputValue(''); 

}

  return (

    <form onSubmit={ onSubmit } aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

/*

aria-label="form" se agrega como atributo

aria-label es un atributo de accesibilidad en HTML utilizado para proporcionar una etiqueta 
descriptiva a un elemento de interfaz de usuario que normalmente no tiene un texto visible, como
 un botón o un enlace. El propósito principal de aria-label es mejorar la accesibilidad web al 
 proporcionar una descripción textual que las tecnologías de asistencia, como los lectores de pantalla, 
 pueden leer en voz alta a los usuarios con discapacidad visual.

Cuando se utiliza aria-label, se proporciona un texto descriptivo que se asocia con el elemento, 
lo que permite a los usuarios comprender la función o el propósito del elemento sin necesidad de
 que haya texto visible en pantalla.

*/
