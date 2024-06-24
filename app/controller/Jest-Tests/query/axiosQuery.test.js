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
        //This part may be confusing, we are looking for the pokedex entry Number
        //meaning that bulbasaur will always be one because the num property part of the bulbasaur object,
        //however, in order to query his position on the response, we are requesting the 150th entry on
        //the array, 150th since we are counting on a zero based index with 151 entries.
        const mew = response[0].num;
        const bulbasaur = response[150].num;
        const lastOne = response[150].name;
        //uncomment the following line to visualize the explanation
        //console.log(mew,bulbasaur,lastOne)
        //so, bulbasaur is less than or equal than mew, remember, we pulled the 150th entry for bulbasaur and the 0
        //for mew, so, technically we are really saying, is 151 more than or equal to 1
        expect(bulbasaur).toBeLessThanOrEqual(mew)
        //if bulbasaur is the last pokemon in the array and mew is the first one the array was sorted correctly
        expect(lastOne).toMatch("Bulbasaur");
        expect(mew).toBe(151);
        //The complete Pokedex is returned
        expect(response).toHaveLength(151);
    });
    test("Fetch Pokémon with selected fields", async () => {
        const response = await fetchPokemonSelected();
        const singleEntry = response[0]
        const stringRes = JSON.stringify(singleEntry)
        //console.log(stringRes)
        //Here We check if the response contains the name and the number, I tried multiple ways to solve this problem,
        //but at the end I decided to stringify it and escape all of the \", might be a bit more complicated, but,
        // I think its an interesting solution
        expect(stringRes).toContain("{\"_id\":\"6672f1f23325fea3570fbfc6\",\"num\":1,\"name\":\"Bulbasaur\"}")
    });
});