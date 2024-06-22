const testing = require("./axiostest");



describe("Testing response's structure", () => {
    test("Does the response contain the number", async () => {
            const response = await testing();
            const number = response[0].num
            expect(number).toBe(1);
            
    });
});

describe("Testing response's structure", () => {
    test("Is the height a number?", async () => {
            const response = await testing();
            const number = response[0].num
            expect(typeof number).toBe('number');
            
    });
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