import { useState } from "react"



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

    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

export default AddCategory
