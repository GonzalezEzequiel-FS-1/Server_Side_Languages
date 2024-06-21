const{
    sum,
    diff,
    prod,
    div,
    sqrt,
    max
} = require("./math")
console.log(sum(2,2))

describe('Testing Math Equations', ()=>{
    test(`starting with the sum function`, async ()=>{
        expect(sum(2,2)).toBe(4)
    })
})