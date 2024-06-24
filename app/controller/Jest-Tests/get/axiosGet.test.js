const testing = require("./axiosGet");
let query = ["?name=Charmander", "select?sort=-num", "?select=num,name"]

describe("Testing response's structure", () => {
    test("Does the response contain the number?", async () => {
            //Check if the number is being generated
            const response = await testing();
            const number = response[0].num
            expect(number).toBe(1);
    });
    test("Is the name the one we expect?", async ()=>{
        const response = await testing();
        //Check if the name is present
        const name = response[0].name
        expect(name).toBe('Bulbasaur');
    })
    test("Is the \"types\" array being generated?", async ()=>{
        const response = await testing();
        const type = response[0].type;
        expect(Array.isArray(type)).toBe(true);
        expect(type.length).toBeLessThanOrEqual(3);
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