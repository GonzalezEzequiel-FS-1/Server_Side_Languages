const testing = require("./axiostest");
const restest =  testing();
const name = restest.data.data[0].name;
console.log(name)

describe("Testing response's structure", () => {
    test("Does the response contain a name", async () => {
            const restest = await testing();
            console.log("Response:", restest);
    });
});
