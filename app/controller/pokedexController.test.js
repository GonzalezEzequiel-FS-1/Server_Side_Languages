//Imports:
//Import necessary functions or modules from your application files.
const pokedexController = require('./pokedexController');
const pokedex = require("../models/pokedexModel");

// Mock Request Object:
// Create a mock request object (mockRequest) with placeholder properties (params, body, query, method).
const mockRequest = (params = {}, body = {}, query = {}, method = {})=>({
    params,
    body,
    query,
    method:"GET"
})
// Mock Response Object:
// Set up a mock response object (mockResponse) with methods like status and json.