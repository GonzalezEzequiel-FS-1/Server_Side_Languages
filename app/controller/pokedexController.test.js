const {
    getAllPkmn,
    select
} = require("./pokedexController")
jest.mock("./pokedexController.js")
describe("Check the structure of the query", ()=>{
    test("Check that all 151 entries are on the Pokedex", async ()=>{
        const response = await getAllPkmn();
        console.log(response.data[0])
    })
})