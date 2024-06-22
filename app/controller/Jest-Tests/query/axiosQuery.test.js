const testing = require("./axiosQuery");


describe("Testing response's structure", () => {
    test("Is the response returning the rigtht entry?", async () => {
            //Check if the number is being generated
            const response = await testing();
            const number = response[0].num
            expect(number).toBe(4);
    });
    test("Is the name the one we expect?", async ()=>{
        const response = await testing();
        //Check if the name is present
        const name = response[0].name
        expect(name).toBe('Charmander');
    });
    test("Is it returning the correct weaknesses", async ()=>{
        const response = await testing();
        const weak = response[0].weaknesses;
        expect(Array.isArray(weak)).toBe(true);
        expect(weak).toContainEqual('Water', 'Ground', 'Rock')
    });
    test("Is the Image a URL?", async ()=>{
        const response = await testing();
        const image = response[0].img;
        expect(image).toMatch(/\b(http|com|pokemon|png)\b/g);
    })
});






/*

const response = await testing();
            const number = response[0].num
            const name = response[0].name
            const image = response[0].img
            const type = response[0].type
            const height = response[0].height
            const weight = response[0].weight
            const weaknesses = response[0].weaknesses
            const nextEvolution = response[0].next_evolution
            const prevEvolution = response[0].prev_evolution
            
            console.log(`Number >>>  ${number}\nName   >>> ${name}\nImage  >>>  ${image}\nType >>> ${type}\nHeight   >>>  ${height}\nWeight >>> ${weight}\nWeaknesses   >>>  ${weaknesses}\nNext Evolution >>> ${nextEvolution}\nPrevious Evolution >>> ${prevEvolution}`);

*/