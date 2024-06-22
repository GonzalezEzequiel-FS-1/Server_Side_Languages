const axios = require("axios");
require('dotenv').config()
const queryByName = "?name=Charmander"
const testing = async () => {
    try {
        const response = await axios.get(`${process.env.APIURL}${query}`);
        const data = response.data.data;
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
testing();

module.exports = testing;