import { useEffect, useState } from "react";
import { getGIf } from "../helpers/getGifs";

export const useFetchGifs = (categories) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const newImagenes = async () =>{
      const newGif = await getGIf(categories);
      setImagenes(newGif)
      setIsLoading(false);
    }
  
    useEffect(()=>{
        newImagenes();
    }, []);

    return{
        imagenes,
        isLoading
    }
}

