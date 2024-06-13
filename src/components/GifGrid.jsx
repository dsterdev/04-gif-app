import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({categories}) => {

  const {imagenes, isLoading} = useFetchGifs(categories);

  return (
    <>
        <h3>{ categories }</h3>  
        {
          isLoading && <h2>Cargando...</h2>
          
        }

        <div className="card-grid">
          {
            imagenes.map((image)=>{
              return <GifItem key={image.id}
                          {...image}/>
            })
          }
        </div>
    </>
  )
}