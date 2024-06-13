import { useState } from "react"

 export const AddCategories = ({onNewCategorie}) => {
  
  const [values, setValues] = useState('');

  const changueValue = (event) => {
    setValues(event.target.value);
  }

  const onSubmit = (event) => {
      event.preventDefault();
      if(values.trim().length <= 1) return;

      onNewCategorie(values.trim());
      setValues('');
  }
  
  return (
    <>
      <form onSubmit = { onSubmit }>
        <input 
          type = "text" 
          placeholder = "Serch your gif here"
          onChange = { changueValue }
        />
      </form>
    </>
  )
}




