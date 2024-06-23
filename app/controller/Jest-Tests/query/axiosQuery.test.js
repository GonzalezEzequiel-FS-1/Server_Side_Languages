const {
    fetchPokemonByName,
    fetchPokemonSorted,
    fetchPokemonSelected
} = require("./axiosQuery");
//Calling the three previously defined functions
describe("Testing individual functions", () => {
    test("Fetch Pokémon by name", async () => {
        //this one uses ?name=Charmander
        const response = await fetchPokemonByName();
        //Charmanders Pokedex entry is #4
        const number = response[0].num;
        //And his name, well, it's Charmander
        const name = response[0].name;
        expect(number).toBe(4);
        expect(name).toBe("Charmander");
    });
    test("Fetch Pokémon sorted by number", async () => {
        const response = await fetchPokemonSorted();
        const mew = response[0].num;
        const numberOne = response[150].name;
        //if bulbasaur is the last pokemon in the array and mew is the first one the array was sorted correctly
        expect(numberOne).toMatch("Bulbasaur");
        expect(mew).toBe(151);
        //The complete Pokedex is returned
        expect(response).toHaveLength(151);
    });
    test("Fetch Pokémon with selected fields", async () => {
        const response = await fetchPokemonSelected();
        console.log(response)
        expect(response[0].num).toBeDefined();
        expect(response[0].name).toBeDefined();
    });
});