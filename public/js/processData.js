import pokeFetch from './apiCall.js';

const logPokemon = async () => {
    const pokemon = await pokeFetch("Charmander");
    
    
    
    console.log(pokemon);
}

export default logPokemon;
