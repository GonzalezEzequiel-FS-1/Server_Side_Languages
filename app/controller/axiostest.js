const axios = require("axios");
axios.get("http://127.0.0.1:6969/api/pokedex/genone")
    .then(response =>{
        const num = response.data.data[0].name
        console.log(num)
    })