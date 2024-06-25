const {
    getAllPkmn,
    select,
    filter,
    sorting,
    posSort,
} = require("./pokedexController");

jest.mock("./pokedexController.js");

//All Tests Passing
describe("Check the structure of the query", () => {

    test("Check for the correct structure of our Pokedex", async () => {
        const response = await getAllPkmn();
        data = response.data[0]
        const success = response.data[0].success;
        //in this case i could have used toBe true or truthy and achieved the same result
        expect(success).toBeTruthy()
        expect(Array.isArray(response.data)).toBe(true);
    })
    test("Check for the correct Pokémon to be returned", async () => {
        const response = await getAllPkmn();
        data = response.data[0]
        expect(data.data[24].name).toBe("Pikachu")
    })
/*
    Write a test for your API with the endpoint the returns limited data based on a query string and select.
 */
    test("Ensuring that the returned data contains the appropriate data ", async () => {
        console.log("Second Mock")
        const response = await select();
        const returnedData = response.data.data
        //Doing a bit of research I found out about the Object.keys() method and it simplified my life SOOOO MUCH
        const keys = Object.keys(returnedData)
        //Since it will always include the id Property, I used .toContain instead of .toBe in order to avoid checking for _id
        expect(keys).toContain("num", "name")
    })
    //Write a test for your API that returns the pagination of the collection. Test the skip and limit of the endpoint.
    test("Tere should be 3 total entries per page", async () => {
        console.log("Pagination Mocked Test");
        const response = await filter();
        const responseData = response.data.data;
        const responseValues = response.data.data;
        //I'm going to make the completely unfounded assumption that if there is an Object.keys() method there will be an Object.values() as well and hopefully this will work as expected...
        const values = Object.values(responseValues);
        //And that worked...
        //console.log(values)
        //However fun that was, the main thing is that the response should contain 3 entries, so,
        //by using Object.keys we can use .length and obtain the amount of objects that are being queried.
        const keysLength = Object.keys(responseData).length;
        expect(keysLength).toBe(3)
    })
    test('If the pagination is set up correctly the 3 names on this example should be Charmander, Charmeleon and Charrizard', async () => {
        const response = await filter();
        const responseData = response.data.data;
        const names = responseData.map(item => item.name);
        expect(names).toContain("Charmander");
        expect(names).toContain("Charmeleon");
        expect(names).toContain("Charizard");
    })
    //Write a test for the endpoint that returns your collection sorted. Test the sort in both directions.
    test("Sorting from the highest value to the lowest", async () => {
        //console.log("Sorting 10-1 Mocked Test");
        const response = await sorting();
        const responseData = response.data.data;
        const mew = responseData[0].num;
        const bulbasaur = responseData[150].num;
        expect(bulbasaur).toBeLessThanOrEqual(mew);
    })

    test("Sorting from the lowest value to the highest", async () => {
        //console.log("Sorting 1-10 Mocked Test");
        const response = await posSort();
        const responseData = response.data.data;
        const bulbasaur = responseData[0].num;
        const mew = responseData[150].num;
        expect(bulbasaur).toBeLessThanOrEqual(mew);
    });
});