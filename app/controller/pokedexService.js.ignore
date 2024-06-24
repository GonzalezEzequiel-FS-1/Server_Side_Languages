const axios = require("axios");

const url = "http://127.0.0.1:6969/api/pokedex/genone";

const pokedexService = async () => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log("Data content:", data);

        // Access the array inside the 'data' property of the response
        if (data && Array.isArray(data.data) && data.data.length > 0) {
            const firstPokemon = data.data[0];
            console.log("Name:", firstPokemon.name);
            console.log("Image URL:", firstPokemon.img);
            console.log("Type:", firstPokemon.type);
            console.log("Height:", firstPokemon.height);
            console.log("Weight:", firstPokemon.weight);
            console.log("Weaknesses:", firstPokemon.weaknesses);
            return data;  // Return the entire data object
        } else {
            console.log("Data is not an array or is empty");
            return { success: false, data: [] };
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        return { success: false, data: [] };
    }
}

module.exports = { pokedexService };
