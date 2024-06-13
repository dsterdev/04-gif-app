 export const getGIf = async(categories)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=Ksz8Yy22qVSOj96xdbnnkXrLVQmXhXv4&q=${ categories }&limit=5`;
    const resp = await fetch (url);
  
    const { data } = await resp.json()
  
    const gifs = data.map((img) => 
     ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      })
    )
    return gifs;
  }