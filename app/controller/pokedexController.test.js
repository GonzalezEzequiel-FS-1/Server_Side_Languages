const {
    getAllPkmn,
    select
} = require("./pokedexController")
jest.mock("./pokedexController.js")
describe("Check the structure of the query", ()=>{
    test("Check that all 151 entries are on the Pokedex", async ()=>{
        const response = await getAllPkmn();
        data = response.data[0]
        const success = response.data[0].success;
        expect(success).toBeTruthy()
        expect(Array.isArray(response.data)).toBe(true);
        //console.log(data)
        expect(data[1].num).toBe(Number)
    })
})