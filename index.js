//fetch is promised based (resolove || reject)



async function fetchData(){
  try {                        
    
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    
    //returns response object
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if(!response.ok){
      throw new Error('Could not fetch the api');
    }

    //take a response object then and conver it to json, this returns promise
    const data = await response.json();  
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite')
    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';
    console.log(data.sprites.front_default) 
  } 
    catch (error) {
      console.error(error);
    }
}
