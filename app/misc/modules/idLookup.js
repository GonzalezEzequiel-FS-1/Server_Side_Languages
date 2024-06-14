const userGLSearch = "Koga";
const apiGLUrl = `http://127.0.0.1:6969/api/pokedex/gymleaders/search/name/${userGLSearch}`;
const apiPkmnUrl = (pokemonNames) => `http://127.0.0.1:6969/api/pokedex/genone/search/name/${pokemonNames}`;


const idLookup = async (userGLSearch)=>{

try{
    
}catch(error){console.log(error)}
const gymLeaderApi = async () => {
    try{

        const response = await fetch(apiGLUrl)
        if(!response.ok){
            console.error("Network Error")
        }
        const data = await response.json();
        const gymLeader = data.gymLeader[0];
        const pokemonNames = gymLeader.pokemon.map(pokemon => pokemon);
        //console.log(pokemonNames);
        await fetchPokemonId(pokemonNames)
    }catch(error){
        console.log(error)
    }
}
const fetchPokemonId = async (pokemonNames) => {
    try {
        const idLookup = async () => {
            pokemonNames.forEach(pokemon => {
                const id = pokemon._id;
                console.log(id);
            }
        )}
        await idLookup();
    } catch (error) {
        console.log(error);
    }
};

gymLeaderApi();
};