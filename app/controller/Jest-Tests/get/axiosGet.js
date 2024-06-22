const axios = require("axios");

const testing = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:6969/api/pokedex/genone");
        const data = response.data.data;
        //console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


module.exports = testing;