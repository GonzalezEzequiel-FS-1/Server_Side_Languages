const axios = require("axios");
require('dotenv').config();

const fetchPokemonByName = async () => {
    try {
        //for some reason {process.env.APIURL}?name=Charmander` sometimes defers to port 80 making all tests fail
        const response = await axios.get(`http://127.0.0.1:6969/api/pokedex/genone/select?name=Charmander`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const fetchPokemonSorted = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:6969/api/pokedex/genone/select?sort=-num`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const fetchPokemonSelected = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:6969/api/pokedex/genone/select?select=num,name`);
        console.log(response.data.data)
        return response.data.data
        
        //console.log(`${process.env.APIURL}select?=num,name`)
        data= (namedresponse)
        //console.log(data)
        return response.data.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
fetchPokemonSelected()
module.exports = {
    fetchPokemonByName,
    fetchPokemonSorted,
    fetchPokemonSelected
};