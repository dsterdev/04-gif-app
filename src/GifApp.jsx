import { useState } from "react"
import { AddCategories, GifGrid } from "./components";

 export const GifApp = () => {
    
    const [categories, setCategories] = useState(['Post Malone']);

    const onAddCategories = (newCategorie) => {
      if(categories.includes(newCategorie)) return;
      setCategories([newCategorie, ...categories]);  
    }
    

return (
  <>
    <h1>Gif App</h1>
      <AddCategories onNewCategorie  = { onAddCategories }/> 
        {
            categories.map((category) => (
                <GifGrid 
                key = { category }
                categories = {category}/>
          ))
        }            
  </>
)
}


