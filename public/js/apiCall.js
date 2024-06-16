// pokeFetch.js
let poke = "Charmander";
let prop = "id";
const pokeFetch = async (usrSearch) => {
    const URL = `http://127.0.0.1:6969/api/pokedex/genone/search/name/${usrSearch}`;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const img = data.data[0].img;
        const name = data.data[0].name;
        const num = data.data[0].num;
        const type = data.data[0].type;
        const height = data.data[0].height;
        const weight = data.data[0].weight;
        const weaknesses = data.data[0].weaknesses;
        const next_evolution = data.data[0].next_evolution;
        const prev_evolution = data.data[0].prev_evolution;

        return {
            img,
            name,
            num,
            type,
            height,
            weight,
            weaknesses,
            next_evolution,
            prev_evolution
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
export const logPokemon = async (poke, prop) => {
    const { pokemonData } = await pokeFetch(poke);
    const reqData = pokemonData[prop];
    console.log(reqData);
    return reqData;
};

export default logPokemon;