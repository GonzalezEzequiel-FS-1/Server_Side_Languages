const {
    getAllPkmn,
    getPkmnbyID,
    getPkmnbyName,
    delPkmn,
    createPkmn,
    editPkmn,
    uploadAll,
    getPkmnByWk,
    delAll,
    filter,
    select
} = require("./pokedexController")

describe("Return Pokemon", () => {
    test(`Testing Jest IHNI`, async ()=>{
        const result =  await getPkmnbyID;
        expect(result.data).toH
    }) 
    

})


//3148490, wayne shaney 15:05 Mc Millan Allie 15:26 herston Katelyn

/*
    test("The Method Returns an array containing a Pokémon", async () => {
        //Starting by Mocking the returned Data to avoid Server overload etc.
        const mockPkmnData = [{
            "num": 1,
            "name": "Bulbasaur",
            "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
            "type": [
                "Grass",
                "Poison"
            ],
            "height": "0.71 m",
            "weight": "6.9 kg",
            "weaknesses": [
                "Fire",
                "Ice",
                "Flying",
                "Psychic"
            ],
            "next_evolution": [{
                    "num": "002",
                    "name": "Ivysaur",
                    "_id": "6672f1f23325fea3570fbfc7"
                },
                {
                    "num": "003",
                    "name": "Venusaur",
                    "_id": "6672f1f23325fea3570fbfc8"
                }
            ],
            "prev_evolution": [],
            "__v": 0
        }];
    })
*/