const axios = require("axios");

const testing = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:6969/api/pokedex/genone");
        //const name = response.data.data[0].name;
        //console.log(name)
        console.log()
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


module.exports = testing;