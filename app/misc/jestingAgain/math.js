// Functions to be tested:

// Add function returns the sum of two numbers
const sum = (numOne, numTwo) => parseFloat(numOne + numTwo);

// Subtract function returns the difference between two numbers
const diff = (numOne, numTwo) => parseFloat(numOne - numTwo);

// Multiply function returns the product of two numbers
const prod = (numOne, numTwo) => parseFloat(numOne * numTwo);

// Divide function returns the quotient of two numbers, rounded to two decimal places
const div = (numOne, numTwo) => parseFloat((numOne / numTwo).toFixed(2));

// Square root function returns the square root of a number
// Use Math.sqrt function
const sqrt = (num) => parseFloat(Math.sqrt(num).toFixed(2));

// Max function returns the larger of two numbers
// Use Math.max function
const max = (numOne, numTwo) => parseFloat(Math.max(numOne, numTwo).toFixed(2));

// Exporting the modules using shorthand syntax
module.exports = {
    sum,
    diff,
    prod,
    div,
    sqrt,
    max
};
