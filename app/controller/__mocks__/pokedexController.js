// Get All Pokemon
const getAllPkmn = async (req, res) => {
    console.log("Mocked response")
    return Promise.resolve({
        data: [{
            "success": true,
            "message": "GET - All Pokémons Listed",
            "data": [{
                    "_id": "6672f1f23325fea3570fbfc6",
                    "num": 1,
                    "name": "Bulbasaur",
                    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "0.71 m",
                    "weight": "6.9 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "next_evolution": [{
                            "num": "002",
                            "name": "Ivysaur",
                            "_id": "6672f1f23325fea3570fbfc7"
                        },
                        {
                            "num": "003",
                            "name": "Venusaur",
                            "_id": "6672f1f23325fea3570fbfc8"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfc9",
                    "num": 2,
                    "name": "Ivysaur",
                    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "0.99 m",
                    "weight": "13.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "001",
                        "name": "Bulbasaur",
                        "_id": "6672f1f23325fea3570fbfca"
                    }],
                    "next_evolution": [{
                        "num": "003",
                        "name": "Venusaur",
                        "_id": "6672f1f23325fea3570fbfcb"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfcc",
                    "num": 3,
                    "name": "Venusaur",
                    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "2.01 m",
                    "weight": "100.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                            "num": "001",
                            "name": "Bulbasaur",
                            "_id": "6672f1f23325fea3570fbfcd"
                        },
                        {
                            "num": "002",
                            "name": "Ivysaur",
                            "_id": "6672f1f23325fea3570fbfce"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfcf",
                    "num": 4,
                    "name": "Charmander",
                    "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "0.61 m",
                    "weight": "8.5 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "next_evolution": [{
                            "num": "005",
                            "name": "Charmeleon",
                            "_id": "6672f1f23325fea3570fbfd0"
                        },
                        {
                            "num": "006",
                            "name": "Charizard",
                            "_id": "6672f1f23325fea3570fbfd1"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfd2",
                    "num": 5,
                    "name": "Charmeleon",
                    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "1.09 m",
                    "weight": "19.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "004",
                        "name": "Charmander",
                        "_id": "6672f1f23325fea3570fbfd3"
                    }],
                    "next_evolution": [{
                        "num": "006",
                        "name": "Charizard",
                        "_id": "6672f1f23325fea3570fbfd4"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfd5",
                    "num": 6,
                    "name": "Charizard",
                    "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
                    "type": [
                        "Fire",
                        "Flying"
                    ],
                    "height": "1.70 m",
                    "weight": "90.5 kg",
                    "weaknesses": [
                        "Water",
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [{
                            "num": "004",
                            "name": "Charmander",
                            "_id": "6672f1f23325fea3570fbfd6"
                        },
                        {
                            "num": "005",
                            "name": "Charmeleon",
                            "_id": "6672f1f23325fea3570fbfd7"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfd8",
                    "num": 7,
                    "name": "Squirtle",
                    "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.51 m",
                    "weight": "9.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                            "num": "008",
                            "name": "Wartortle",
                            "_id": "6672f1f23325fea3570fbfd9"
                        },
                        {
                            "num": "009",
                            "name": "Blastoise",
                            "_id": "6672f1f23325fea3570fbfda"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfdb",
                    "num": 8,
                    "name": "Wartortle",
                    "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.99 m",
                    "weight": "22.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                        "num": "007",
                        "name": "Squirtle",
                        "_id": "6672f1f23325fea3570fbfdc"
                    }],
                    "next_evolution": [{
                        "num": "009",
                        "name": "Blastoise",
                        "_id": "6672f1f23325fea3570fbfdd"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfde",
                    "num": 9,
                    "name": "Blastoise",
                    "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
                    "type": [
                        "Water"
                    ],
                    "height": "1.60 m",
                    "weight": "85.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                            "num": "007",
                            "name": "Squirtle",
                            "_id": "6672f1f23325fea3570fbfdf"
                        },
                        {
                            "num": "008",
                            "name": "Wartortle",
                            "_id": "6672f1f23325fea3570fbfe0"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfe1",
                    "num": 10,
                    "name": "Caterpie",
                    "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
                    "type": [
                        "Bug"
                    ],
                    "height": "0.30 m",
                    "weight": "2.9 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Rock"
                    ],
                    "next_evolution": [{
                            "num": "011",
                            "name": "Metapod",
                            "_id": "6672f1f23325fea3570fbfe2"
                        },
                        {
                            "num": "012",
                            "name": "Butterfree",
                            "_id": "6672f1f23325fea3570fbfe3"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfe4",
                    "num": 11,
                    "name": "Metapod",
                    "img": "http://www.serebii.net/pokemongo/pokemon/011.png",
                    "type": [
                        "Bug"
                    ],
                    "height": "0.71 m",
                    "weight": "9.9 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "010",
                        "name": "Caterpie",
                        "_id": "6672f1f23325fea3570fbfe5"
                    }],
                    "next_evolution": [{
                        "num": "012",
                        "name": "Butterfree",
                        "_id": "6672f1f23325fea3570fbfe6"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfe7",
                    "num": 12,
                    "name": "Butterfree",
                    "img": "http://www.serebii.net/pokemongo/pokemon/012.png",
                    "type": [
                        "Bug",
                        "Flying"
                    ],
                    "height": "1.09 m",
                    "weight": "32.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Electric",
                        "Ice",
                        "Flying",
                        "Rock"
                    ],
                    "prev_evolution": [{
                            "num": "010",
                            "name": "Caterpie",
                            "_id": "6672f1f23325fea3570fbfe8"
                        },
                        {
                            "num": "011",
                            "name": "Metapod",
                            "_id": "6672f1f23325fea3570fbfe9"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfea",
                    "num": 13,
                    "name": "Weedle",
                    "img": "http://www.serebii.net/pokemongo/pokemon/013.png",
                    "type": [
                        "Bug",
                        "Poison"
                    ],
                    "height": "0.30 m",
                    "weight": "3.2 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Psychic",
                        "Rock"
                    ],
                    "next_evolution": [{
                            "num": "014",
                            "name": "Kakuna",
                            "_id": "6672f1f23325fea3570fbfeb"
                        },
                        {
                            "num": "015",
                            "name": "Beedrill",
                            "_id": "6672f1f23325fea3570fbfec"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbfed",
                    "num": 14,
                    "name": "Kakuna",
                    "img": "http://www.serebii.net/pokemongo/pokemon/014.png",
                    "type": [
                        "Bug",
                        "Poison"
                    ],
                    "height": "0.61 m",
                    "weight": "10.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Psychic",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "013",
                        "name": "Weedle",
                        "_id": "6672f1f23325fea3570fbfee"
                    }],
                    "next_evolution": [{
                        "num": "015",
                        "name": "Beedrill",
                        "_id": "6672f1f23325fea3570fbfef"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbff0",
                    "num": 15,
                    "name": "Beedrill",
                    "img": "http://www.serebii.net/pokemongo/pokemon/015.png",
                    "type": [
                        "Bug",
                        "Poison"
                    ],
                    "height": "0.99 m",
                    "weight": "29.5 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Psychic",
                        "Rock"
                    ],
                    "prev_evolution": [{
                            "num": "013",
                            "name": "Weedle",
                            "_id": "6672f1f23325fea3570fbff1"
                        },
                        {
                            "num": "014",
                            "name": "Kakuna",
                            "_id": "6672f1f23325fea3570fbff2"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbff3",
                    "num": 16,
                    "name": "Pidgey",
                    "img": "http://www.serebii.net/pokemongo/pokemon/016.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "0.30 m",
                    "weight": "1.8 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "next_evolution": [{
                            "num": "017",
                            "name": "Pidgeotto",
                            "_id": "6672f1f23325fea3570fbff4"
                        },
                        {
                            "num": "018",
                            "name": "Pidgeot",
                            "_id": "6672f1f23325fea3570fbff5"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbff6",
                    "num": 17,
                    "name": "Pidgeotto",
                    "img": "http://www.serebii.net/pokemongo/pokemon/017.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "1.09 m",
                    "weight": "30.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "016",
                        "name": "Pidgey",
                        "_id": "6672f1f23325fea3570fbff7"
                    }],
                    "next_evolution": [{
                        "num": "018",
                        "name": "Pidgeot",
                        "_id": "6672f1f23325fea3570fbff8"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbff9",
                    "num": 18,
                    "name": "Pidgeot",
                    "img": "http://www.serebii.net/pokemongo/pokemon/018.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "1.50 m",
                    "weight": "39.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [{
                            "num": "016",
                            "name": "Pidgey",
                            "_id": "6672f1f23325fea3570fbffa"
                        },
                        {
                            "num": "017",
                            "name": "Pidgeotto",
                            "_id": "6672f1f23325fea3570fbffb"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbffc",
                    "num": 19,
                    "name": "Rattata",
                    "img": "http://www.serebii.net/pokemongo/pokemon/019.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.30 m",
                    "weight": "3.5 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "next_evolution": [{
                        "num": "020",
                        "name": "Raticate",
                        "_id": "6672f1f23325fea3570fbffd"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fbffe",
                    "num": 20,
                    "name": "Raticate",
                    "img": "http://www.serebii.net/pokemongo/pokemon/020.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.71 m",
                    "weight": "18.5 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [{
                        "num": "019",
                        "name": "Rattata",
                        "_id": "6672f1f23325fea3570fbfff"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc000",
                    "num": 21,
                    "name": "Spearow",
                    "img": "http://www.serebii.net/pokemongo/pokemon/021.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "0.30 m",
                    "weight": "2.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "022",
                        "name": "Fearow",
                        "_id": "6672f1f23325fea3570fc001"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc002",
                    "num": 22,
                    "name": "Fearow",
                    "img": "http://www.serebii.net/pokemongo/pokemon/022.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "1.19 m",
                    "weight": "38.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "021",
                        "name": "Spearow",
                        "_id": "6672f1f23325fea3570fc003"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc004",
                    "num": 23,
                    "name": "Ekans",
                    "img": "http://www.serebii.net/pokemongo/pokemon/023.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "2.01 m",
                    "weight": "6.9 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "next_evolution": [{
                        "num": "024",
                        "name": "Arbok",
                        "_id": "6672f1f23325fea3570fc005"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc006",
                    "num": 24,
                    "name": "Arbok",
                    "img": "http://www.serebii.net/pokemongo/pokemon/024.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "3.51 m",
                    "weight": "65.0 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "023",
                        "name": "Ekans",
                        "_id": "6672f1f23325fea3570fc007"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc008",
                    "num": 25,
                    "name": "Pikachu",
                    "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "0.41 m",
                    "weight": "6.0 kg",
                    "weaknesses": [
                        "Ground"
                    ],
                    "next_evolution": [{
                        "num": "026",
                        "name": "Raichu",
                        "_id": "6672f1f23325fea3570fc009"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc00a",
                    "num": 26,
                    "name": "Raichu",
                    "img": "http://www.serebii.net/pokemongo/pokemon/026.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "0.79 m",
                    "weight": "30.0 kg",
                    "weaknesses": [
                        "Ground"
                    ],
                    "prev_evolution": [{
                        "num": "025",
                        "name": "Pikachu",
                        "_id": "6672f1f23325fea3570fc00b"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc00c",
                    "num": 27,
                    "name": "Sandshrew",
                    "img": "http://www.serebii.net/pokemongo/pokemon/027.png",
                    "type": [
                        "Ground"
                    ],
                    "height": "0.61 m",
                    "weight": "12.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice"
                    ],
                    "next_evolution": [{
                        "num": "028",
                        "name": "Sandslash",
                        "_id": "6672f1f23325fea3570fc00d"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc00e",
                    "num": 28,
                    "name": "Sandslash",
                    "img": "http://www.serebii.net/pokemongo/pokemon/028.png",
                    "type": [
                        "Ground"
                    ],
                    "height": "0.99 m",
                    "weight": "29.5 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice"
                    ],
                    "prev_evolution": [{
                        "num": "027",
                        "name": "Sandshrew",
                        "_id": "6672f1f23325fea3570fc00f"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc010",
                    "num": 29,
                    "name": "Nidoran ♀ (Female)",
                    "img": "http://www.serebii.net/pokemongo/pokemon/029.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "0.41 m",
                    "weight": "7.0 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "next_evolution": [{
                            "num": "030",
                            "name": "Nidorina",
                            "_id": "6672f1f23325fea3570fc011"
                        },
                        {
                            "num": "031",
                            "name": "Nidoqueen",
                            "_id": "6672f1f23325fea3570fc012"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc013",
                    "num": 30,
                    "name": "Nidorina",
                    "img": "http://www.serebii.net/pokemongo/pokemon/030.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "0.79 m",
                    "weight": "20.0 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "029",
                        "name": "Nidoran(Female)",
                        "_id": "6672f1f23325fea3570fc014"
                    }],
                    "next_evolution": [{
                        "num": "031",
                        "name": "Nidoqueen",
                        "_id": "6672f1f23325fea3570fc015"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc016",
                    "num": 31,
                    "name": "Nidoqueen",
                    "img": "http://www.serebii.net/pokemongo/pokemon/031.png",
                    "type": [
                        "Poison",
                        "Ground"
                    ],
                    "height": "1.30 m",
                    "weight": "60.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ice",
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                            "num": "029",
                            "name": "Nidoran(Female)",
                            "_id": "6672f1f23325fea3570fc017"
                        },
                        {
                            "num": "030",
                            "name": "Nidorina",
                            "_id": "6672f1f23325fea3570fc018"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc019",
                    "num": 32,
                    "name": "Nidoran ♂ (Male)",
                    "img": "http://www.serebii.net/pokemongo/pokemon/032.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "0.51 m",
                    "weight": "9.0 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "next_evolution": [{
                            "num": "033",
                            "name": "Nidorino",
                            "_id": "6672f1f23325fea3570fc01a"
                        },
                        {
                            "num": "034",
                            "name": "Nidoking",
                            "_id": "6672f1f23325fea3570fc01b"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc01c",
                    "num": 33,
                    "name": "Nidorino",
                    "img": "http://www.serebii.net/pokemongo/pokemon/033.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "0.89 m",
                    "weight": "19.5 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "032",
                        "name": "Nidoran(Male)",
                        "_id": "6672f1f23325fea3570fc01d"
                    }],
                    "next_evolution": [{
                        "num": "034",
                        "name": "Nidoking",
                        "_id": "6672f1f23325fea3570fc01e"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc01f",
                    "num": 34,
                    "name": "Nidoking",
                    "img": "http://www.serebii.net/pokemongo/pokemon/034.png",
                    "type": [
                        "Poison",
                        "Ground"
                    ],
                    "height": "1.40 m",
                    "weight": "62.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ice",
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                            "num": "032",
                            "name": "Nidoran(Male)",
                            "_id": "6672f1f23325fea3570fc020"
                        },
                        {
                            "num": "033",
                            "name": "Nidorino",
                            "_id": "6672f1f23325fea3570fc021"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc022",
                    "num": 35,
                    "name": "Clefairy",
                    "img": "http://www.serebii.net/pokemongo/pokemon/035.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.61 m",
                    "weight": "7.5 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "next_evolution": [{
                        "num": "036",
                        "name": "Clefable",
                        "_id": "6672f1f23325fea3570fc023"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc024",
                    "num": 36,
                    "name": "Clefable",
                    "img": "http://www.serebii.net/pokemongo/pokemon/036.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "1.30 m",
                    "weight": "40.0 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [{
                        "num": "035",
                        "name": "Clefairy",
                        "_id": "6672f1f23325fea3570fc025"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc026",
                    "num": 37,
                    "name": "Vulpix",
                    "img": "http://www.serebii.net/pokemongo/pokemon/037.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "0.61 m",
                    "weight": "9.9 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "038",
                        "name": "Ninetales",
                        "_id": "6672f1f23325fea3570fc027"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc028",
                    "num": 38,
                    "name": "Ninetales",
                    "img": "http://www.serebii.net/pokemongo/pokemon/038.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "1.09 m",
                    "weight": "19.9 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "037",
                        "name": "Vulpix",
                        "_id": "6672f1f23325fea3570fc029"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc02a",
                    "num": 39,
                    "name": "Jigglypuff",
                    "img": "http://www.serebii.net/pokemongo/pokemon/039.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.51 m",
                    "weight": "5.5 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "next_evolution": [{
                        "num": "040",
                        "name": "Wigglytuff",
                        "_id": "6672f1f23325fea3570fc02b"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc02c",
                    "num": 40,
                    "name": "Wigglytuff",
                    "img": "http://www.serebii.net/pokemongo/pokemon/040.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.99 m",
                    "weight": "12.0 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [{
                        "num": "039",
                        "name": "Jigglypuff",
                        "_id": "6672f1f23325fea3570fc02d"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc02e",
                    "num": 41,
                    "name": "Zubat",
                    "img": "http://www.serebii.net/pokemongo/pokemon/041.png",
                    "type": [
                        "Poison",
                        "Flying"
                    ],
                    "height": "0.79 m",
                    "weight": "7.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Ice",
                        "Psychic",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "042",
                        "name": "Golbat",
                        "_id": "6672f1f23325fea3570fc02f"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc030",
                    "num": 42,
                    "name": "Golbat",
                    "img": "http://www.serebii.net/pokemongo/pokemon/042.png",
                    "type": [
                        "Poison",
                        "Flying"
                    ],
                    "height": "1.60 m",
                    "weight": "55.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Ice",
                        "Psychic",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "041",
                        "name": "Zubat",
                        "_id": "6672f1f23325fea3570fc031"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc032",
                    "num": 43,
                    "name": "Oddish",
                    "img": "http://www.serebii.net/pokemongo/pokemon/043.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "0.51 m",
                    "weight": "5.4 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "next_evolution": [{
                            "num": "044",
                            "name": "Gloom",
                            "_id": "6672f1f23325fea3570fc033"
                        },
                        {
                            "num": "045",
                            "name": "Vileplume",
                            "_id": "6672f1f23325fea3570fc034"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc035",
                    "num": 44,
                    "name": "Gloom",
                    "img": "http://www.serebii.net/pokemongo/pokemon/044.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "0.79 m",
                    "weight": "8.6 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "043",
                        "name": "Oddish",
                        "_id": "6672f1f23325fea3570fc036"
                    }],
                    "next_evolution": [{
                        "num": "045",
                        "name": "Vileplume",
                        "_id": "6672f1f23325fea3570fc037"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc038",
                    "num": 45,
                    "name": "Vileplume",
                    "img": "http://www.serebii.net/pokemongo/pokemon/045.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "1.19 m",
                    "weight": "18.6 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                            "num": "043",
                            "name": "Oddish",
                            "_id": "6672f1f23325fea3570fc039"
                        },
                        {
                            "num": "044",
                            "name": "Gloom",
                            "_id": "6672f1f23325fea3570fc03a"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc03b",
                    "num": 46,
                    "name": "Paras",
                    "img": "http://www.serebii.net/pokemongo/pokemon/046.png",
                    "type": [
                        "Bug",
                        "Grass"
                    ],
                    "height": "0.30 m",
                    "weight": "5.4 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Poison",
                        "Flying",
                        "Bug",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "047",
                        "name": "Parasect",
                        "_id": "6672f1f23325fea3570fc03c"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc03d",
                    "num": 47,
                    "name": "Parasect",
                    "img": "http://www.serebii.net/pokemongo/pokemon/047.png",
                    "type": [
                        "Bug",
                        "Grass"
                    ],
                    "height": "0.99 m",
                    "weight": "29.5 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Poison",
                        "Flying",
                        "Bug",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "046",
                        "name": "Paras",
                        "_id": "6672f1f23325fea3570fc03e"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc03f",
                    "num": 48,
                    "name": "Venonat",
                    "img": "http://www.serebii.net/pokemongo/pokemon/048.png",
                    "type": [
                        "Bug",
                        "Poison"
                    ],
                    "height": "0.99 m",
                    "weight": "30.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Psychic",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "049",
                        "name": "Venomoth",
                        "_id": "6672f1f23325fea3570fc040"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc041",
                    "num": 49,
                    "name": "Venomoth",
                    "img": "http://www.serebii.net/pokemongo/pokemon/049.png",
                    "type": [
                        "Bug",
                        "Poison"
                    ],
                    "height": "1.50 m",
                    "weight": "12.5 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Psychic",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "048",
                        "name": "Venonat",
                        "_id": "6672f1f23325fea3570fc042"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc043",
                    "num": 50,
                    "name": "Diglett",
                    "img": "http://www.serebii.net/pokemongo/pokemon/050.png",
                    "type": [
                        "Ground"
                    ],
                    "height": "0.20 m",
                    "weight": "0.8 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice"
                    ],
                    "next_evolution": [{
                        "num": "051",
                        "name": "Dugtrio",
                        "_id": "6672f1f23325fea3570fc044"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc045",
                    "num": 51,
                    "name": "Dugtrio",
                    "img": "http://www.serebii.net/pokemongo/pokemon/051.png",
                    "type": [
                        "Ground"
                    ],
                    "height": "0.71 m",
                    "weight": "33.3 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice"
                    ],
                    "prev_evolution": [{
                        "num": "050",
                        "name": "Diglett",
                        "_id": "6672f1f23325fea3570fc046"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc047",
                    "num": 52,
                    "name": "Meowth",
                    "img": "http://www.serebii.net/pokemongo/pokemon/052.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.41 m",
                    "weight": "4.2 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "next_evolution": [{
                        "num": "053",
                        "name": "Persian",
                        "_id": "6672f1f23325fea3570fc048"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc049",
                    "num": 53,
                    "name": "Persian",
                    "img": "http://www.serebii.net/pokemongo/pokemon/053.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.99 m",
                    "weight": "32.0 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [{
                        "num": "052",
                        "name": "Meowth",
                        "_id": "6672f1f23325fea3570fc04a"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc04b",
                    "num": 54,
                    "name": "Psyduck",
                    "img": "http://www.serebii.net/pokemongo/pokemon/054.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.79 m",
                    "weight": "19.6 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "055",
                        "name": "Golduck",
                        "_id": "6672f1f23325fea3570fc04c"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc04d",
                    "num": 55,
                    "name": "Golduck",
                    "img": "http://www.serebii.net/pokemongo/pokemon/055.png",
                    "type": [
                        "Water"
                    ],
                    "height": "1.70 m",
                    "weight": "76.6 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                        "num": "054",
                        "name": "Psyduck",
                        "_id": "6672f1f23325fea3570fc04e"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc04f",
                    "num": 56,
                    "name": "Mankey",
                    "img": "http://www.serebii.net/pokemongo/pokemon/056.png",
                    "type": [
                        "Fighting"
                    ],
                    "height": "0.51 m",
                    "weight": "28.0 kg",
                    "weaknesses": [
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "next_evolution": [{
                        "num": "057",
                        "name": "Primeape",
                        "_id": "6672f1f23325fea3570fc050"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc051",
                    "num": 57,
                    "name": "Primeape",
                    "img": "http://www.serebii.net/pokemongo/pokemon/057.png",
                    "type": [
                        "Fighting"
                    ],
                    "height": "0.99 m",
                    "weight": "32.0 kg",
                    "weaknesses": [
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "prev_evolution": [{
                        "num": "056",
                        "name": "Mankey",
                        "_id": "6672f1f23325fea3570fc052"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc053",
                    "num": 58,
                    "name": "Growlithe",
                    "img": "http://www.serebii.net/pokemongo/pokemon/058.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "0.71 m",
                    "weight": "19.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "059",
                        "name": "Arcanine",
                        "_id": "6672f1f23325fea3570fc054"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc055",
                    "num": 59,
                    "name": "Arcanine",
                    "img": "http://www.serebii.net/pokemongo/pokemon/059.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "1.91 m",
                    "weight": "155.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "058",
                        "name": "Growlithe",
                        "_id": "6672f1f23325fea3570fc056"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc057",
                    "num": 60,
                    "name": "Poliwag",
                    "img": "http://www.serebii.net/pokemongo/pokemon/060.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.61 m",
                    "weight": "12.4 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                            "num": "061",
                            "name": "Poliwhirl",
                            "_id": "6672f1f23325fea3570fc058"
                        },
                        {
                            "num": "062",
                            "name": "Poliwrath",
                            "_id": "6672f1f23325fea3570fc059"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc05a",
                    "num": 61,
                    "name": "Poliwhirl",
                    "img": "http://www.serebii.net/pokemongo/pokemon/061.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.99 m",
                    "weight": "20.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                        "num": "060",
                        "name": "Poliwag",
                        "_id": "6672f1f23325fea3570fc05b"
                    }],
                    "next_evolution": [{
                        "num": "062",
                        "name": "Poliwrath",
                        "_id": "6672f1f23325fea3570fc05c"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc05d",
                    "num": 62,
                    "name": "Poliwrath",
                    "img": "http://www.serebii.net/pokemongo/pokemon/062.png",
                    "type": [
                        "Water",
                        "Fighting"
                    ],
                    "height": "1.30 m",
                    "weight": "54.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "prev_evolution": [{
                            "num": "060",
                            "name": "Poliwag",
                            "_id": "6672f1f23325fea3570fc05e"
                        },
                        {
                            "num": "061",
                            "name": "Poliwhirl",
                            "_id": "6672f1f23325fea3570fc05f"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc060",
                    "num": 63,
                    "name": "Abra",
                    "img": "http://www.serebii.net/pokemongo/pokemon/063.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "0.89 m",
                    "weight": "19.5 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "next_evolution": [{
                            "num": "064",
                            "name": "Kadabra",
                            "_id": "6672f1f23325fea3570fc061"
                        },
                        {
                            "num": "065",
                            "name": "Alakazam",
                            "_id": "6672f1f23325fea3570fc062"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc063",
                    "num": 64,
                    "name": "Kadabra",
                    "img": "http://www.serebii.net/pokemongo/pokemon/064.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "1.30 m",
                    "weight": "56.5 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                        "num": "063",
                        "name": "Abra",
                        "_id": "6672f1f23325fea3570fc064"
                    }],
                    "next_evolution": [{
                        "num": "065",
                        "name": "Alakazam",
                        "_id": "6672f1f23325fea3570fc065"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc066",
                    "num": 65,
                    "name": "Alakazam",
                    "img": "http://www.serebii.net/pokemongo/pokemon/065.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "1.50 m",
                    "weight": "48.0 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                            "num": "063",
                            "name": "Abra",
                            "_id": "6672f1f23325fea3570fc067"
                        },
                        {
                            "num": "064",
                            "name": "Kadabra",
                            "_id": "6672f1f23325fea3570fc068"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc069",
                    "num": 66,
                    "name": "Machop",
                    "img": "http://www.serebii.net/pokemongo/pokemon/066.png",
                    "type": [
                        "Fighting"
                    ],
                    "height": "0.79 m",
                    "weight": "19.5 kg",
                    "weaknesses": [
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "next_evolution": [{
                            "num": "067",
                            "name": "Machoke",
                            "_id": "6672f1f23325fea3570fc06a"
                        },
                        {
                            "num": "068",
                            "name": "Machamp",
                            "_id": "6672f1f23325fea3570fc06b"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc06c",
                    "num": 67,
                    "name": "Machoke",
                    "img": "http://www.serebii.net/pokemongo/pokemon/067.png",
                    "type": [
                        "Fighting"
                    ],
                    "height": "1.50 m",
                    "weight": "70.5 kg",
                    "weaknesses": [
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "prev_evolution": [{
                        "num": "066",
                        "name": "Machop",
                        "_id": "6672f1f23325fea3570fc06d"
                    }],
                    "next_evolution": [{
                        "num": "068",
                        "name": "Machamp",
                        "_id": "6672f1f23325fea3570fc06e"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc06f",
                    "num": 68,
                    "name": "Machamp",
                    "img": "http://www.serebii.net/pokemongo/pokemon/068.png",
                    "type": [
                        "Fighting"
                    ],
                    "height": "1.60 m",
                    "weight": "130.0 kg",
                    "weaknesses": [
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "prev_evolution": [{
                            "num": "066",
                            "name": "Machop",
                            "_id": "6672f1f23325fea3570fc070"
                        },
                        {
                            "num": "067",
                            "name": "Machoke",
                            "_id": "6672f1f23325fea3570fc071"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc072",
                    "num": 69,
                    "name": "Bellsprout",
                    "img": "http://www.serebii.net/pokemongo/pokemon/069.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "0.71 m",
                    "weight": "4.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "next_evolution": [{
                            "num": "070",
                            "name": "Weepinbell",
                            "_id": "6672f1f23325fea3570fc073"
                        },
                        {
                            "num": "071",
                            "name": "Victreebel",
                            "_id": "6672f1f23325fea3570fc074"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc075",
                    "num": 70,
                    "name": "Weepinbell",
                    "img": "http://www.serebii.net/pokemongo/pokemon/070.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "0.99 m",
                    "weight": "6.4 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "069",
                        "name": "Bellsprout",
                        "_id": "6672f1f23325fea3570fc076"
                    }],
                    "next_evolution": [{
                        "num": "071",
                        "name": "Victreebel",
                        "_id": "6672f1f23325fea3570fc077"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc078",
                    "num": 71,
                    "name": "Victreebel",
                    "img": "http://www.serebii.net/pokemongo/pokemon/071.png",
                    "type": [
                        "Grass",
                        "Poison"
                    ],
                    "height": "1.70 m",
                    "weight": "15.5 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Flying",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                            "num": "069",
                            "name": "Bellsprout",
                            "_id": "6672f1f23325fea3570fc079"
                        },
                        {
                            "num": "070",
                            "name": "Weepinbell",
                            "_id": "6672f1f23325fea3570fc07a"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc07b",
                    "num": 72,
                    "name": "Tentacool",
                    "img": "http://www.serebii.net/pokemongo/pokemon/072.png",
                    "type": [
                        "Water",
                        "Poison"
                    ],
                    "height": "0.89 m",
                    "weight": "45.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Ground",
                        "Psychic"
                    ],
                    "next_evolution": [{
                        "num": "073",
                        "name": "Tentacruel",
                        "_id": "6672f1f23325fea3570fc07c"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc07d",
                    "num": 73,
                    "name": "Tentacruel",
                    "img": "http://www.serebii.net/pokemongo/pokemon/073.png",
                    "type": [
                        "Water",
                        "Poison"
                    ],
                    "height": "1.60 m",
                    "weight": "55.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "072",
                        "name": "Tentacool",
                        "_id": "6672f1f23325fea3570fc07e"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc07f",
                    "num": 74,
                    "name": "Geodude",
                    "img": "http://www.serebii.net/pokemongo/pokemon/074.png",
                    "type": [
                        "Rock",
                        "Ground"
                    ],
                    "height": "0.41 m",
                    "weight": "20.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice",
                        "Fighting",
                        "Ground",
                        "Steel"
                    ],
                    "next_evolution": [{
                            "num": "075",
                            "name": "Graveler",
                            "_id": "6672f1f23325fea3570fc080"
                        },
                        {
                            "num": "076",
                            "name": "Golem",
                            "_id": "6672f1f23325fea3570fc081"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc082",
                    "num": 75,
                    "name": "Graveler",
                    "img": "http://www.serebii.net/pokemongo/pokemon/075.png",
                    "type": [
                        "Rock",
                        "Ground"
                    ],
                    "height": "0.99 m",
                    "weight": "105.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice",
                        "Fighting",
                        "Ground",
                        "Steel"
                    ],
                    "prev_evolution": [{
                        "num": "074",
                        "name": "Geodude",
                        "_id": "6672f1f23325fea3570fc083"
                    }],
                    "next_evolution": [{
                        "num": "076",
                        "name": "Golem",
                        "_id": "6672f1f23325fea3570fc084"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc085",
                    "num": 76,
                    "name": "Golem",
                    "img": "http://www.serebii.net/pokemongo/pokemon/076.png",
                    "type": [
                        "Rock",
                        "Ground"
                    ],
                    "height": "1.40 m",
                    "weight": "300.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice",
                        "Fighting",
                        "Ground",
                        "Steel"
                    ],
                    "prev_evolution": [{
                            "num": "074",
                            "name": "Geodude",
                            "_id": "6672f1f23325fea3570fc086"
                        },
                        {
                            "num": "075",
                            "name": "Graveler",
                            "_id": "6672f1f23325fea3570fc087"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc088",
                    "num": 77,
                    "name": "Ponyta",
                    "img": "http://www.serebii.net/pokemongo/pokemon/077.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "0.99 m",
                    "weight": "30.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "078",
                        "name": "Rapidash",
                        "_id": "6672f1f23325fea3570fc089"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc08a",
                    "num": 78,
                    "name": "Rapidash",
                    "img": "http://www.serebii.net/pokemongo/pokemon/078.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "1.70 m",
                    "weight": "95.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "077",
                        "name": "Ponyta",
                        "_id": "6672f1f23325fea3570fc08b"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc08c",
                    "num": 79,
                    "name": "Slowpoke",
                    "img": "http://www.serebii.net/pokemongo/pokemon/079.png",
                    "type": [
                        "Water",
                        "Psychic"
                    ],
                    "height": "1.19 m",
                    "weight": "36.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "next_evolution": [{
                        "num": "080",
                        "name": "Slowbro",
                        "_id": "6672f1f23325fea3570fc08d"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc08e",
                    "num": 80,
                    "name": "Slowbro",
                    "img": "http://www.serebii.net/pokemongo/pokemon/080.png",
                    "type": [
                        "Water",
                        "Psychic"
                    ],
                    "height": "1.60 m",
                    "weight": "78.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                        "num": "079",
                        "name": "Slowpoke",
                        "_id": "6672f1f23325fea3570fc08f"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc090",
                    "num": 81,
                    "name": "Magnemite",
                    "img": "http://www.serebii.net/pokemongo/pokemon/081.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "0.30 m",
                    "weight": "6.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Water",
                        "Ground"
                    ],
                    "next_evolution": [{
                        "num": "082",
                        "name": "Magneton",
                        "_id": "6672f1f23325fea3570fc091"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc092",
                    "num": 82,
                    "name": "Magneton",
                    "img": "http://www.serebii.net/pokemongo/pokemon/082.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "0.99 m",
                    "weight": "60.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Water",
                        "Ground"
                    ],
                    "prev_evolution": [{
                        "num": "081",
                        "name": "Magnemite",
                        "_id": "6672f1f23325fea3570fc093"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc094",
                    "num": 83,
                    "name": "Farfetch'd",
                    "img": "http://www.serebii.net/pokemongo/pokemon/083.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "0.79 m",
                    "weight": "15.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc095",
                    "num": 84,
                    "name": "Doduo",
                    "img": "http://www.serebii.net/pokemongo/pokemon/084.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "1.40 m",
                    "weight": "39.2 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "next_evolution": [{
                        "num": "085",
                        "name": "Dodrio",
                        "_id": "6672f1f23325fea3570fc096"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc097",
                    "num": 85,
                    "name": "Dodrio",
                    "img": "http://www.serebii.net/pokemongo/pokemon/085.png",
                    "type": [
                        "Normal",
                        "Flying"
                    ],
                    "height": "1.80 m",
                    "weight": "85.2 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "084",
                        "name": "Doduo",
                        "_id": "6672f1f23325fea3570fc098"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc099",
                    "num": 86,
                    "name": "Seel",
                    "img": "http://www.serebii.net/pokemongo/pokemon/086.png",
                    "type": [
                        "Water"
                    ],
                    "height": "1.09 m",
                    "weight": "90.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "087",
                        "name": "Dewgong",
                        "_id": "6672f1f23325fea3570fc09a"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc09b",
                    "num": 87,
                    "name": "Dewgong",
                    "img": "http://www.serebii.net/pokemongo/pokemon/087.png",
                    "type": [
                        "Water",
                        "Ice"
                    ],
                    "height": "1.70 m",
                    "weight": "120.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Fighting",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "086",
                        "name": "Seel",
                        "_id": "6672f1f23325fea3570fc09c"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc09d",
                    "num": 88,
                    "name": "Grimer",
                    "img": "http://www.serebii.net/pokemongo/pokemon/088.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "0.89 m",
                    "weight": "30.0 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "next_evolution": [{
                        "num": "089",
                        "name": "Muk",
                        "_id": "6672f1f23325fea3570fc09e"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc09f",
                    "num": 89,
                    "name": "Muk",
                    "img": "http://www.serebii.net/pokemongo/pokemon/089.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "1.19 m",
                    "weight": "30.0 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "088",
                        "name": "Grimer",
                        "_id": "6672f1f23325fea3570fc0a0"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0a1",
                    "num": 90,
                    "name": "Shellder",
                    "img": "http://www.serebii.net/pokemongo/pokemon/090.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.30 m",
                    "weight": "4.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "091",
                        "name": "Cloyster",
                        "_id": "6672f1f23325fea3570fc0a2"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0a3",
                    "num": 91,
                    "name": "Cloyster",
                    "img": "http://www.serebii.net/pokemongo/pokemon/091.png",
                    "type": [
                        "Water",
                        "Ice"
                    ],
                    "height": "1.50 m",
                    "weight": "132.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Fighting",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "090",
                        "name": "Shellder",
                        "_id": "6672f1f23325fea3570fc0a4"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0a5",
                    "num": 92,
                    "name": "Gastly",
                    "img": "http://www.serebii.net/pokemongo/pokemon/092.png",
                    "type": [
                        "Ghost",
                        "Poison"
                    ],
                    "height": "1.30 m",
                    "weight": "0.1 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic",
                        "Ghost",
                        "Dark"
                    ],
                    "next_evolution": [{
                            "num": "093",
                            "name": "Haunter",
                            "_id": "6672f1f23325fea3570fc0a6"
                        },
                        {
                            "num": "094",
                            "name": "Gengar",
                            "_id": "6672f1f23325fea3570fc0a7"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0a8",
                    "num": 93,
                    "name": "Haunter",
                    "img": "http://www.serebii.net/pokemongo/pokemon/093.png",
                    "type": [
                        "Ghost",
                        "Poison"
                    ],
                    "height": "1.60 m",
                    "weight": "0.1 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                        "num": "092",
                        "name": "Gastly",
                        "_id": "6672f1f23325fea3570fc0a9"
                    }],
                    "next_evolution": [{
                        "num": "094",
                        "name": "Gengar",
                        "_id": "6672f1f23325fea3570fc0aa"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0ab",
                    "num": 94,
                    "name": "Gengar",
                    "img": "http://www.serebii.net/pokemongo/pokemon/094.png",
                    "type": [
                        "Ghost",
                        "Poison"
                    ],
                    "height": "1.50 m",
                    "weight": "40.5 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                            "num": "092",
                            "name": "Gastly",
                            "_id": "6672f1f23325fea3570fc0ac"
                        },
                        {
                            "num": "093",
                            "name": "Haunter",
                            "_id": "6672f1f23325fea3570fc0ad"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0ae",
                    "num": 95,
                    "name": "Onix",
                    "img": "http://www.serebii.net/pokemongo/pokemon/095.png",
                    "type": [
                        "Rock",
                        "Ground"
                    ],
                    "height": "8.79 m",
                    "weight": "210.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice",
                        "Fighting",
                        "Ground",
                        "Steel"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0af",
                    "num": 96,
                    "name": "Drowzee",
                    "img": "http://www.serebii.net/pokemongo/pokemon/096.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "0.99 m",
                    "weight": "32.4 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "next_evolution": [{
                        "num": "097",
                        "name": "Hypno",
                        "_id": "6672f1f23325fea3570fc0b0"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0b1",
                    "num": 97,
                    "name": "Hypno",
                    "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "1.60 m",
                    "weight": "75.6 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                        "num": "096",
                        "name": "Drowzee",
                        "_id": "6672f1f23325fea3570fc0b2"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0b3",
                    "num": 98,
                    "name": "Krabby",
                    "img": "http://www.serebii.net/pokemongo/pokemon/098.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.41 m",
                    "weight": "6.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "099",
                        "name": "Kingler",
                        "_id": "6672f1f23325fea3570fc0b4"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0b5",
                    "num": 99,
                    "name": "Kingler",
                    "img": "http://www.serebii.net/pokemongo/pokemon/099.png",
                    "type": [
                        "Water"
                    ],
                    "height": "1.30 m",
                    "weight": "60.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                        "num": "098",
                        "name": "Krabby",
                        "_id": "6672f1f23325fea3570fc0b6"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0b7",
                    "num": 100,
                    "name": "Voltorb",
                    "img": "http://www.serebii.net/pokemongo/pokemon/100.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "0.51 m",
                    "weight": "10.4 kg",
                    "weaknesses": [
                        "Ground"
                    ],
                    "next_evolution": [{
                        "num": "101",
                        "name": "Electrode",
                        "_id": "6672f1f23325fea3570fc0b8"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0b9",
                    "num": 101,
                    "name": "Electrode",
                    "img": "http://www.serebii.net/pokemongo/pokemon/101.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "1.19 m",
                    "weight": "66.6 kg",
                    "weaknesses": [
                        "Ground"
                    ],
                    "prev_evolution": [{
                        "num": "100",
                        "name": "Voltorb",
                        "_id": "6672f1f23325fea3570fc0ba"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0bb",
                    "num": 102,
                    "name": "Exeggcute",
                    "img": "http://www.serebii.net/pokemongo/pokemon/102.png",
                    "type": [
                        "Grass",
                        "Psychic"
                    ],
                    "height": "0.41 m",
                    "weight": "2.5 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Poison",
                        "Flying",
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "next_evolution": [{
                        "num": "103",
                        "name": "Exeggutor",
                        "_id": "6672f1f23325fea3570fc0bc"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0bd",
                    "num": 103,
                    "name": "Exeggutor",
                    "img": "http://www.serebii.net/pokemongo/pokemon/103.png",
                    "type": [
                        "Grass",
                        "Psychic"
                    ],
                    "height": "2.01 m",
                    "weight": "120.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Poison",
                        "Flying",
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                        "num": "102",
                        "name": "Exeggcute",
                        "_id": "6672f1f23325fea3570fc0be"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0bf",
                    "num": 104,
                    "name": "Cubone",
                    "img": "http://www.serebii.net/pokemongo/pokemon/104.png",
                    "type": [
                        "Ground"
                    ],
                    "height": "0.41 m",
                    "weight": "6.5 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice"
                    ],
                    "next_evolution": [{
                        "num": "105",
                        "name": "Marowak",
                        "_id": "6672f1f23325fea3570fc0c0"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0c1",
                    "num": 105,
                    "name": "Marowak",
                    "img": "http://www.serebii.net/pokemongo/pokemon/105.png",
                    "type": [
                        "Ground"
                    ],
                    "height": "0.99 m",
                    "weight": "45.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice"
                    ],
                    "prev_evolution": [{
                        "num": "104",
                        "name": "Cubone",
                        "_id": "6672f1f23325fea3570fc0c2"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0c3",
                    "num": 106,
                    "name": "Hitmonlee",
                    "img": "http://www.serebii.net/pokemongo/pokemon/106.png",
                    "type": [
                        "Fighting"
                    ],
                    "height": "1.50 m",
                    "weight": "49.8 kg",
                    "weaknesses": [
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0c4",
                    "num": 107,
                    "name": "Hitmonchan",
                    "img": "http://www.serebii.net/pokemongo/pokemon/107.png",
                    "type": [
                        "Fighting"
                    ],
                    "height": "1.40 m",
                    "weight": "50.2 kg",
                    "weaknesses": [
                        "Flying",
                        "Psychic",
                        "Fairy"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0c5",
                    "num": 108,
                    "name": "Lickitung",
                    "img": "http://www.serebii.net/pokemongo/pokemon/108.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "1.19 m",
                    "weight": "65.5 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0c6",
                    "num": 109,
                    "name": "Koffing",
                    "img": "http://www.serebii.net/pokemongo/pokemon/109.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "0.61 m",
                    "weight": "1.0 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "next_evolution": [{
                        "num": "110",
                        "name": "Weezing",
                        "_id": "6672f1f23325fea3570fc0c7"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0c8",
                    "num": 110,
                    "name": "Weezing",
                    "img": "http://www.serebii.net/pokemongo/pokemon/110.png",
                    "type": [
                        "Poison"
                    ],
                    "height": "1.19 m",
                    "weight": "9.5 kg",
                    "weaknesses": [
                        "Ground",
                        "Psychic"
                    ],
                    "prev_evolution": [{
                        "num": "109",
                        "name": "Koffing",
                        "_id": "6672f1f23325fea3570fc0c9"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0ca",
                    "num": 111,
                    "name": "Rhyhorn",
                    "img": "http://www.serebii.net/pokemongo/pokemon/111.png",
                    "type": [
                        "Ground",
                        "Rock"
                    ],
                    "height": "0.99 m",
                    "weight": "115.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice",
                        "Fighting",
                        "Ground",
                        "Steel"
                    ],
                    "next_evolution": [{
                        "num": "112",
                        "name": "Rhydon",
                        "_id": "6672f1f23325fea3570fc0cb"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0cc",
                    "num": 112,
                    "name": "Rhydon",
                    "img": "http://www.serebii.net/pokemongo/pokemon/112.png",
                    "type": [
                        "Ground",
                        "Rock"
                    ],
                    "height": "1.91 m",
                    "weight": "120.0 kg",
                    "weaknesses": [
                        "Water",
                        "Grass",
                        "Ice",
                        "Fighting",
                        "Ground",
                        "Steel"
                    ],
                    "prev_evolution": [{
                        "num": "111",
                        "name": "Rhyhorn",
                        "_id": "6672f1f23325fea3570fc0cd"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0ce",
                    "num": 113,
                    "name": "Chansey",
                    "img": "http://www.serebii.net/pokemongo/pokemon/113.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "1.09 m",
                    "weight": "34.6 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0cf",
                    "num": 114,
                    "name": "Tangela",
                    "img": "http://www.serebii.net/pokemongo/pokemon/114.png",
                    "type": [
                        "Grass"
                    ],
                    "height": "0.99 m",
                    "weight": "35.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Ice",
                        "Poison",
                        "Flying",
                        "Bug"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0d0",
                    "num": 115,
                    "name": "Kangaskhan",
                    "img": "http://www.serebii.net/pokemongo/pokemon/115.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "2.21 m",
                    "weight": "80.0 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0d1",
                    "num": 116,
                    "name": "Horsea",
                    "img": "http://www.serebii.net/pokemongo/pokemon/116.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.41 m",
                    "weight": "8.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "117",
                        "name": "Seadra",
                        "_id": "6672f1f23325fea3570fc0d2"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0d3",
                    "num": 117,
                    "name": "Seadra",
                    "img": "http://www.serebii.net/pokemongo/pokemon/117.png",
                    "type": [
                        "Water"
                    ],
                    "height": "1.19 m",
                    "weight": "25.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                        "num": "116",
                        "name": "Horsea",
                        "_id": "6672f1f23325fea3570fc0d4"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0d5",
                    "num": 118,
                    "name": "Goldeen",
                    "img": "http://www.serebii.net/pokemongo/pokemon/118.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.61 m",
                    "weight": "15.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "119",
                        "name": "Seaking",
                        "_id": "6672f1f23325fea3570fc0d6"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0d7",
                    "num": 119,
                    "name": "Seaking",
                    "img": "http://www.serebii.net/pokemongo/pokemon/119.png",
                    "type": [
                        "Water"
                    ],
                    "height": "1.30 m",
                    "weight": "39.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                        "num": "118",
                        "name": "Goldeen",
                        "_id": "6672f1f23325fea3570fc0d8"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0d9",
                    "num": 120,
                    "name": "Staryu",
                    "img": "http://www.serebii.net/pokemongo/pokemon/120.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.79 m",
                    "weight": "34.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "121",
                        "name": "Starmie",
                        "_id": "6672f1f23325fea3570fc0da"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0db",
                    "num": 121,
                    "name": "Starmie",
                    "img": "http://www.serebii.net/pokemongo/pokemon/121.png",
                    "type": [
                        "Water",
                        "Psychic"
                    ],
                    "height": "1.09 m",
                    "weight": "80.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [{
                        "num": "120",
                        "name": "Staryu",
                        "_id": "6672f1f23325fea3570fc0dc"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0dd",
                    "num": 122,
                    "name": "Mr. Mime",
                    "img": "http://www.serebii.net/pokemongo/pokemon/122.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "1.30 m",
                    "weight": "54.5 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0de",
                    "num": 123,
                    "name": "Scyther",
                    "img": "http://www.serebii.net/pokemongo/pokemon/123.png",
                    "type": [
                        "Bug",
                        "Flying"
                    ],
                    "height": "1.50 m",
                    "weight": "56.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Electric",
                        "Ice",
                        "Flying",
                        "Rock"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0df",
                    "num": 124,
                    "name": "Jynx",
                    "img": "http://www.serebii.net/pokemongo/pokemon/124.png",
                    "type": [
                        "Ice",
                        "Psychic"
                    ],
                    "height": "1.40 m",
                    "weight": "40.6 kg",
                    "weaknesses": [
                        "Fire",
                        "Bug",
                        "Rock",
                        "Ghost",
                        "Dark",
                        "Steel"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e0",
                    "num": 125,
                    "name": "Electabuzz",
                    "img": "http://www.serebii.net/pokemongo/pokemon/125.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "1.09 m",
                    "weight": "30.0 kg",
                    "weaknesses": [
                        "Ground"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e1",
                    "num": 126,
                    "name": "Magmar",
                    "img": "http://www.serebii.net/pokemongo/pokemon/126.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "1.30 m",
                    "weight": "44.5 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e2",
                    "num": 127,
                    "name": "Pinsir",
                    "img": "http://www.serebii.net/pokemongo/pokemon/127.png",
                    "type": [
                        "Bug"
                    ],
                    "height": "1.50 m",
                    "weight": "55.0 kg",
                    "weaknesses": [
                        "Fire",
                        "Flying",
                        "Rock"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e3",
                    "num": 128,
                    "name": "Tauros",
                    "img": "http://www.serebii.net/pokemongo/pokemon/128.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "1.40 m",
                    "weight": "88.4 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e4",
                    "num": 129,
                    "name": "Magikarp",
                    "img": "http://www.serebii.net/pokemongo/pokemon/129.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.89 m",
                    "weight": "10.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "next_evolution": [{
                        "num": "130",
                        "name": "Gyarados",
                        "_id": "6672f1f23325fea3570fc0e5"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e6",
                    "num": 130,
                    "name": "Gyarados",
                    "img": "http://www.serebii.net/pokemongo/pokemon/130.png",
                    "type": [
                        "Water",
                        "Flying"
                    ],
                    "height": "6.50 m",
                    "weight": "235.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "129",
                        "name": "Magikarp",
                        "_id": "6672f1f23325fea3570fc0e7"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e8",
                    "num": 131,
                    "name": "Lapras",
                    "img": "http://www.serebii.net/pokemongo/pokemon/131.png",
                    "type": [
                        "Water",
                        "Ice"
                    ],
                    "height": "2.49 m",
                    "weight": "220.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Fighting",
                        "Rock"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0e9",
                    "num": 132,
                    "name": "Ditto",
                    "img": "http://www.serebii.net/pokemongo/pokemon/132.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.30 m",
                    "weight": "4.0 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0ea",
                    "num": 133,
                    "name": "Eevee",
                    "img": "http://www.serebii.net/pokemongo/pokemon/133.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.30 m",
                    "weight": "6.5 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "next_evolution": [{
                            "num": "134",
                            "name": "Vaporeon",
                            "_id": "6672f1f23325fea3570fc0eb"
                        },
                        {
                            "num": "135",
                            "name": "Jolteon",
                            "_id": "6672f1f23325fea3570fc0ec"
                        },
                        {
                            "num": "136",
                            "name": "Flareon",
                            "_id": "6672f1f23325fea3570fc0ed"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0ee",
                    "num": 134,
                    "name": "Vaporeon",
                    "img": "http://www.serebii.net/pokemongo/pokemon/134.png",
                    "type": [
                        "Water"
                    ],
                    "height": "0.99 m",
                    "weight": "29.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass"
                    ],
                    "prev_evolution": [{
                        "num": "133",
                        "name": "Eevee",
                        "_id": "6672f1f23325fea3570fc0ef"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0f0",
                    "num": 135,
                    "name": "Jolteon",
                    "img": "http://www.serebii.net/pokemongo/pokemon/135.png",
                    "type": [
                        "Electric"
                    ],
                    "height": "0.79 m",
                    "weight": "24.5 kg",
                    "weaknesses": [
                        "Ground"
                    ],
                    "prev_evolution": [{
                        "num": "133",
                        "name": "Eevee",
                        "_id": "6672f1f23325fea3570fc0f1"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0f2",
                    "num": 136,
                    "name": "Flareon",
                    "img": "http://www.serebii.net/pokemongo/pokemon/136.png",
                    "type": [
                        "Fire"
                    ],
                    "height": "0.89 m",
                    "weight": "25.0 kg",
                    "weaknesses": [
                        "Water",
                        "Ground",
                        "Rock"
                    ],
                    "prev_evolution": [{
                        "num": "133",
                        "name": "Eevee",
                        "_id": "6672f1f23325fea3570fc0f3"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0f4",
                    "num": 137,
                    "name": "Porygon",
                    "img": "http://www.serebii.net/pokemongo/pokemon/137.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "0.79 m",
                    "weight": "36.5 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0f5",
                    "num": 138,
                    "name": "Omanyte",
                    "img": "http://www.serebii.net/pokemongo/pokemon/138.png",
                    "type": [
                        "Rock",
                        "Water"
                    ],
                    "height": "0.41 m",
                    "weight": "7.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Fighting",
                        "Ground"
                    ],
                    "next_evolution": [{
                        "num": "139",
                        "name": "Omastar",
                        "_id": "6672f1f23325fea3570fc0f6"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0f7",
                    "num": 139,
                    "name": "Omastar",
                    "img": "http://www.serebii.net/pokemongo/pokemon/139.png",
                    "type": [
                        "Rock",
                        "Water"
                    ],
                    "height": "0.99 m",
                    "weight": "35.0 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Fighting",
                        "Ground"
                    ],
                    "prev_evolution": [{
                        "num": "138",
                        "name": "Omanyte",
                        "_id": "6672f1f23325fea3570fc0f8"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0f9",
                    "num": 140,
                    "name": "Kabuto",
                    "img": "http://www.serebii.net/pokemongo/pokemon/140.png",
                    "type": [
                        "Rock",
                        "Water"
                    ],
                    "height": "0.51 m",
                    "weight": "11.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Fighting",
                        "Ground"
                    ],
                    "next_evolution": [{
                        "num": "141",
                        "name": "Kabutops",
                        "_id": "6672f1f23325fea3570fc0fa"
                    }],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0fb",
                    "num": 141,
                    "name": "Kabutops",
                    "img": "http://www.serebii.net/pokemongo/pokemon/141.png",
                    "type": [
                        "Rock",
                        "Water"
                    ],
                    "height": "1.30 m",
                    "weight": "40.5 kg",
                    "weaknesses": [
                        "Electric",
                        "Grass",
                        "Fighting",
                        "Ground"
                    ],
                    "prev_evolution": [{
                        "num": "140",
                        "name": "Kabuto",
                        "_id": "6672f1f23325fea3570fc0fc"
                    }],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0fd",
                    "num": 142,
                    "name": "Aerodactyl",
                    "img": "http://www.serebii.net/pokemongo/pokemon/142.png",
                    "type": [
                        "Rock",
                        "Flying"
                    ],
                    "height": "1.80 m",
                    "weight": "59.0 kg",
                    "weaknesses": [
                        "Water",
                        "Electric",
                        "Ice",
                        "Rock",
                        "Steel"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0fe",
                    "num": 143,
                    "name": "Snorlax",
                    "img": "http://www.serebii.net/pokemongo/pokemon/143.png",
                    "type": [
                        "Normal"
                    ],
                    "height": "2.11 m",
                    "weight": "460.0 kg",
                    "weaknesses": [
                        "Fighting"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc0ff",
                    "num": 144,
                    "name": "Articuno",
                    "img": "http://www.serebii.net/pokemongo/pokemon/144.png",
                    "type": [
                        "Ice",
                        "Flying"
                    ],
                    "height": "1.70 m",
                    "weight": "55.4 kg",
                    "weaknesses": [
                        "Fire",
                        "Electric",
                        "Rock",
                        "Steel"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc100",
                    "num": 145,
                    "name": "Zapdos",
                    "img": "http://www.serebii.net/pokemongo/pokemon/145.png",
                    "type": [
                        "Electric",
                        "Flying"
                    ],
                    "height": "1.60 m",
                    "weight": "52.6 kg",
                    "weaknesses": [
                        "Ice",
                        "Rock"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc101",
                    "num": 146,
                    "name": "Moltres",
                    "img": "http://www.serebii.net/pokemongo/pokemon/146.png",
                    "type": [
                        "Fire",
                        "Flying"
                    ],
                    "height": "2.01 m",
                    "weight": "60.0 kg",
                    "weaknesses": [
                        "Water",
                        "Electric",
                        "Rock"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc102",
                    "num": 147,
                    "name": "Dratini",
                    "img": "http://www.serebii.net/pokemongo/pokemon/147.png",
                    "type": [
                        "Dragon"
                    ],
                    "height": "1.80 m",
                    "weight": "3.3 kg",
                    "weaknesses": [
                        "Ice",
                        "Dragon",
                        "Fairy"
                    ],
                    "next_evolution": [{
                            "num": "148",
                            "name": "Dragonair",
                            "_id": "6672f1f23325fea3570fc103"
                        },
                        {
                            "num": "149",
                            "name": "Dragonite",
                            "_id": "6672f1f23325fea3570fc104"
                        }
                    ],
                    "prev_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc105",
                    "num": 148,
                    "name": "Dragonair",
                    "img": "http://www.serebii.net/pokemongo/pokemon/148.png",
                    "type": [
                        "Dragon"
                    ],
                    "height": "3.99 m",
                    "weight": "16.5 kg",
                    "weaknesses": [
                        "Ice",
                        "Dragon",
                        "Fairy"
                    ],
                    "prev_evolution": [{
                        "num": "147",
                        "name": "Dratini",
                        "_id": "6672f1f23325fea3570fc106"
                    }],
                    "next_evolution": [{
                        "num": "149",
                        "name": "Dragonite",
                        "_id": "6672f1f23325fea3570fc107"
                    }],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc108",
                    "num": 149,
                    "name": "Dragonite",
                    "img": "http://www.serebii.net/pokemongo/pokemon/149.png",
                    "type": [
                        "Dragon",
                        "Flying"
                    ],
                    "height": "2.21 m",
                    "weight": "210.0 kg",
                    "weaknesses": [
                        "Ice",
                        "Rock",
                        "Dragon",
                        "Fairy"
                    ],
                    "prev_evolution": [{
                            "num": "147",
                            "name": "Dratini",
                            "_id": "6672f1f23325fea3570fc109"
                        },
                        {
                            "num": "148",
                            "name": "Dragonair",
                            "_id": "6672f1f23325fea3570fc10a"
                        }
                    ],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc10b",
                    "num": 150,
                    "name": "Mewtwo",
                    "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "2.01 m",
                    "weight": "122.0 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                },
                {
                    "_id": "6672f1f23325fea3570fc10c",
                    "num": 151,
                    "name": "Mew",
                    "img": "http://www.serebii.net/pokemongo/pokemon/151.png",
                    "type": [
                        "Psychic"
                    ],
                    "height": "0.41 m",
                    "weight": "4.0 kg",
                    "weaknesses": [
                        "Bug",
                        "Ghost",
                        "Dark"
                    ],
                    "prev_evolution": [],
                    "next_evolution": [],
                    "__v": 0
                }
            ]
        }]
    })
};
//Select items from query:

const select = async (req, res) => {
    console.log('Mocked Result')
    return Promise.resolve({
        data: [{
            "message": "pokemons fetched",
            "status": "success",
            "data": [{
                    "_id": "6672f1f23325fea3570fbfc6",
                    "num": 1,
                    "name": "Bulbasaur"
                },
                {
                    "_id": "6672f1f23325fea3570fbfc9",
                    "num": 2,
                    "name": "Ivysaur"
                },
                {
                    "_id": "6672f1f23325fea3570fbfcc",
                    "num": 3,
                    "name": "Venusaur"
                },
                {
                    "_id": "6672f1f23325fea3570fbfcf",
                    "num": 4,
                    "name": "Charmander"
                },
                {
                    "_id": "6672f1f23325fea3570fbfd2",
                    "num": 5,
                    "name": "Charmeleon"
                },
                {
                    "_id": "6672f1f23325fea3570fbfd5",
                    "num": 6,
                    "name": "Charizard"
                },
                {
                    "_id": "6672f1f23325fea3570fbfd8",
                    "num": 7,
                    "name": "Squirtle"
                },
                {
                    "_id": "6672f1f23325fea3570fbfdb",
                    "num": 8,
                    "name": "Wartortle"
                },
                {
                    "_id": "6672f1f23325fea3570fbfde",
                    "num": 9,
                    "name": "Blastoise"
                },
                {
                    "_id": "6672f1f23325fea3570fbfe1",
                    "num": 10,
                    "name": "Caterpie"
                },
                {
                    "_id": "6672f1f23325fea3570fbfe4",
                    "num": 11,
                    "name": "Metapod"
                },
                {
                    "_id": "6672f1f23325fea3570fbfe7",
                    "num": 12,
                    "name": "Butterfree"
                },
                {
                    "_id": "6672f1f23325fea3570fbfea",
                    "num": 13,
                    "name": "Weedle"
                },
                {
                    "_id": "6672f1f23325fea3570fbfed",
                    "num": 14,
                    "name": "Kakuna"
                },
                {
                    "_id": "6672f1f23325fea3570fbff0",
                    "num": 15,
                    "name": "Beedrill"
                },
                {
                    "_id": "6672f1f23325fea3570fbff3",
                    "num": 16,
                    "name": "Pidgey"
                },
                {
                    "_id": "6672f1f23325fea3570fbff6",
                    "num": 17,
                    "name": "Pidgeotto"
                },
                {
                    "_id": "6672f1f23325fea3570fbff9",
                    "num": 18,
                    "name": "Pidgeot"
                },
                {
                    "_id": "6672f1f23325fea3570fbffc",
                    "num": 19,
                    "name": "Rattata"
                },
                {
                    "_id": "6672f1f23325fea3570fbffe",
                    "num": 20,
                    "name": "Raticate"
                },
                {
                    "_id": "6672f1f23325fea3570fc000",
                    "num": 21,
                    "name": "Spearow"
                },
                {
                    "_id": "6672f1f23325fea3570fc002",
                    "num": 22,
                    "name": "Fearow"
                },
                {
                    "_id": "6672f1f23325fea3570fc004",
                    "num": 23,
                    "name": "Ekans"
                },
                {
                    "_id": "6672f1f23325fea3570fc006",
                    "num": 24,
                    "name": "Arbok"
                },
                {
                    "_id": "6672f1f23325fea3570fc008",
                    "num": 25,
                    "name": "Pikachu"
                },
                {
                    "_id": "6672f1f23325fea3570fc00a",
                    "num": 26,
                    "name": "Raichu"
                },
                {
                    "_id": "6672f1f23325fea3570fc00c",
                    "num": 27,
                    "name": "Sandshrew"
                },
                {
                    "_id": "6672f1f23325fea3570fc00e",
                    "num": 28,
                    "name": "Sandslash"
                },
                {
                    "_id": "6672f1f23325fea3570fc010",
                    "num": 29,
                    "name": "Nidoran ♀ (Female)"
                },
                {
                    "_id": "6672f1f23325fea3570fc013",
                    "num": 30,
                    "name": "Nidorina"
                },
                {
                    "_id": "6672f1f23325fea3570fc016",
                    "num": 31,
                    "name": "Nidoqueen"
                },
                {
                    "_id": "6672f1f23325fea3570fc019",
                    "num": 32,
                    "name": "Nidoran ♂ (Male)"
                },
                {
                    "_id": "6672f1f23325fea3570fc01c",
                    "num": 33,
                    "name": "Nidorino"
                },
                {
                    "_id": "6672f1f23325fea3570fc01f",
                    "num": 34,
                    "name": "Nidoking"
                },
                {
                    "_id": "6672f1f23325fea3570fc022",
                    "num": 35,
                    "name": "Clefairy"
                },
                {
                    "_id": "6672f1f23325fea3570fc024",
                    "num": 36,
                    "name": "Clefable"
                },
                {
                    "_id": "6672f1f23325fea3570fc026",
                    "num": 37,
                    "name": "Vulpix"
                },
                {
                    "_id": "6672f1f23325fea3570fc028",
                    "num": 38,
                    "name": "Ninetales"
                },
                {
                    "_id": "6672f1f23325fea3570fc02a",
                    "num": 39,
                    "name": "Jigglypuff"
                },
                {
                    "_id": "6672f1f23325fea3570fc02c",
                    "num": 40,
                    "name": "Wigglytuff"
                },
                {
                    "_id": "6672f1f23325fea3570fc02e",
                    "num": 41,
                    "name": "Zubat"
                },
                {
                    "_id": "6672f1f23325fea3570fc030",
                    "num": 42,
                    "name": "Golbat"
                },
                {
                    "_id": "6672f1f23325fea3570fc032",
                    "num": 43,
                    "name": "Oddish"
                },
                {
                    "_id": "6672f1f23325fea3570fc035",
                    "num": 44,
                    "name": "Gloom"
                },
                {
                    "_id": "6672f1f23325fea3570fc038",
                    "num": 45,
                    "name": "Vileplume"
                },
                {
                    "_id": "6672f1f23325fea3570fc03b",
                    "num": 46,
                    "name": "Paras"
                },
                {
                    "_id": "6672f1f23325fea3570fc03d",
                    "num": 47,
                    "name": "Parasect"
                },
                {
                    "_id": "6672f1f23325fea3570fc03f",
                    "num": 48,
                    "name": "Venonat"
                },
                {
                    "_id": "6672f1f23325fea3570fc041",
                    "num": 49,
                    "name": "Venomoth"
                },
                {
                    "_id": "6672f1f23325fea3570fc043",
                    "num": 50,
                    "name": "Diglett"
                },
                {
                    "_id": "6672f1f23325fea3570fc045",
                    "num": 51,
                    "name": "Dugtrio"
                },
                {
                    "_id": "6672f1f23325fea3570fc047",
                    "num": 52,
                    "name": "Meowth"
                },
                {
                    "_id": "6672f1f23325fea3570fc049",
                    "num": 53,
                    "name": "Persian"
                },
                {
                    "_id": "6672f1f23325fea3570fc04b",
                    "num": 54,
                    "name": "Psyduck"
                },
                {
                    "_id": "6672f1f23325fea3570fc04d",
                    "num": 55,
                    "name": "Golduck"
                },
                {
                    "_id": "6672f1f23325fea3570fc04f",
                    "num": 56,
                    "name": "Mankey"
                },
                {
                    "_id": "6672f1f23325fea3570fc051",
                    "num": 57,
                    "name": "Primeape"
                },
                {
                    "_id": "6672f1f23325fea3570fc053",
                    "num": 58,
                    "name": "Growlithe"
                },
                {
                    "_id": "6672f1f23325fea3570fc055",
                    "num": 59,
                    "name": "Arcanine"
                },
                {
                    "_id": "6672f1f23325fea3570fc057",
                    "num": 60,
                    "name": "Poliwag"
                },
                {
                    "_id": "6672f1f23325fea3570fc05a",
                    "num": 61,
                    "name": "Poliwhirl"
                },
                {
                    "_id": "6672f1f23325fea3570fc05d",
                    "num": 62,
                    "name": "Poliwrath"
                },
                {
                    "_id": "6672f1f23325fea3570fc060",
                    "num": 63,
                    "name": "Abra"
                },
                {
                    "_id": "6672f1f23325fea3570fc063",
                    "num": 64,
                    "name": "Kadabra"
                },
                {
                    "_id": "6672f1f23325fea3570fc066",
                    "num": 65,
                    "name": "Alakazam"
                },
                {
                    "_id": "6672f1f23325fea3570fc069",
                    "num": 66,
                    "name": "Machop"
                },
                {
                    "_id": "6672f1f23325fea3570fc06c",
                    "num": 67,
                    "name": "Machoke"
                },
                {
                    "_id": "6672f1f23325fea3570fc06f",
                    "num": 68,
                    "name": "Machamp"
                },
                {
                    "_id": "6672f1f23325fea3570fc072",
                    "num": 69,
                    "name": "Bellsprout"
                },
                {
                    "_id": "6672f1f23325fea3570fc075",
                    "num": 70,
                    "name": "Weepinbell"
                },
                {
                    "_id": "6672f1f23325fea3570fc078",
                    "num": 71,
                    "name": "Victreebel"
                },
                {
                    "_id": "6672f1f23325fea3570fc07b",
                    "num": 72,
                    "name": "Tentacool"
                },
                {
                    "_id": "6672f1f23325fea3570fc07d",
                    "num": 73,
                    "name": "Tentacruel"
                },
                {
                    "_id": "6672f1f23325fea3570fc07f",
                    "num": 74,
                    "name": "Geodude"
                },
                {
                    "_id": "6672f1f23325fea3570fc082",
                    "num": 75,
                    "name": "Graveler"
                },
                {
                    "_id": "6672f1f23325fea3570fc085",
                    "num": 76,
                    "name": "Golem"
                },
                {
                    "_id": "6672f1f23325fea3570fc088",
                    "num": 77,
                    "name": "Ponyta"
                },
                {
                    "_id": "6672f1f23325fea3570fc08a",
                    "num": 78,
                    "name": "Rapidash"
                },
                {
                    "_id": "6672f1f23325fea3570fc08c",
                    "num": 79,
                    "name": "Slowpoke"
                },
                {
                    "_id": "6672f1f23325fea3570fc08e",
                    "num": 80,
                    "name": "Slowbro"
                },
                {
                    "_id": "6672f1f23325fea3570fc090",
                    "num": 81,
                    "name": "Magnemite"
                },
                {
                    "_id": "6672f1f23325fea3570fc092",
                    "num": 82,
                    "name": "Magneton"
                },
                {
                    "_id": "6672f1f23325fea3570fc094",
                    "num": 83,
                    "name": "Farfetch'd"
                },
                {
                    "_id": "6672f1f23325fea3570fc095",
                    "num": 84,
                    "name": "Doduo"
                },
                {
                    "_id": "6672f1f23325fea3570fc097",
                    "num": 85,
                    "name": "Dodrio"
                },
                {
                    "_id": "6672f1f23325fea3570fc099",
                    "num": 86,
                    "name": "Seel"
                },
                {
                    "_id": "6672f1f23325fea3570fc09b",
                    "num": 87,
                    "name": "Dewgong"
                },
                {
                    "_id": "6672f1f23325fea3570fc09d",
                    "num": 88,
                    "name": "Grimer"
                },
                {
                    "_id": "6672f1f23325fea3570fc09f",
                    "num": 89,
                    "name": "Muk"
                },
                {
                    "_id": "6672f1f23325fea3570fc0a1",
                    "num": 90,
                    "name": "Shellder"
                },
                {
                    "_id": "6672f1f23325fea3570fc0a3",
                    "num": 91,
                    "name": "Cloyster"
                },
                {
                    "_id": "6672f1f23325fea3570fc0a5",
                    "num": 92,
                    "name": "Gastly"
                },
                {
                    "_id": "6672f1f23325fea3570fc0a8",
                    "num": 93,
                    "name": "Haunter"
                },
                {
                    "_id": "6672f1f23325fea3570fc0ab",
                    "num": 94,
                    "name": "Gengar"
                },
                {
                    "_id": "6672f1f23325fea3570fc0ae",
                    "num": 95,
                    "name": "Onix"
                },
                {
                    "_id": "6672f1f23325fea3570fc0af",
                    "num": 96,
                    "name": "Drowzee"
                },
                {
                    "_id": "6672f1f23325fea3570fc0b1",
                    "num": 97,
                    "name": "Hypno"
                },
                {
                    "_id": "6672f1f23325fea3570fc0b3",
                    "num": 98,
                    "name": "Krabby"
                },
                {
                    "_id": "6672f1f23325fea3570fc0b5",
                    "num": 99,
                    "name": "Kingler"
                },
                {
                    "_id": "6672f1f23325fea3570fc0b7",
                    "num": 100,
                    "name": "Voltorb"
                },
                {
                    "_id": "6672f1f23325fea3570fc0b9",
                    "num": 101,
                    "name": "Electrode"
                },
                {
                    "_id": "6672f1f23325fea3570fc0bb",
                    "num": 102,
                    "name": "Exeggcute"
                },
                {
                    "_id": "6672f1f23325fea3570fc0bd",
                    "num": 103,
                    "name": "Exeggutor"
                },
                {
                    "_id": "6672f1f23325fea3570fc0bf",
                    "num": 104,
                    "name": "Cubone"
                },
                {
                    "_id": "6672f1f23325fea3570fc0c1",
                    "num": 105,
                    "name": "Marowak"
                },
                {
                    "_id": "6672f1f23325fea3570fc0c3",
                    "num": 106,
                    "name": "Hitmonlee"
                },
                {
                    "_id": "6672f1f23325fea3570fc0c4",
                    "num": 107,
                    "name": "Hitmonchan"
                },
                {
                    "_id": "6672f1f23325fea3570fc0c5",
                    "num": 108,
                    "name": "Lickitung"
                },
                {
                    "_id": "6672f1f23325fea3570fc0c6",
                    "num": 109,
                    "name": "Koffing"
                },
                {
                    "_id": "6672f1f23325fea3570fc0c8",
                    "num": 110,
                    "name": "Weezing"
                },
                {
                    "_id": "6672f1f23325fea3570fc0ca",
                    "num": 111,
                    "name": "Rhyhorn"
                },
                {
                    "_id": "6672f1f23325fea3570fc0cc",
                    "num": 112,
                    "name": "Rhydon"
                },
                {
                    "_id": "6672f1f23325fea3570fc0ce",
                    "num": 113,
                    "name": "Chansey"
                },
                {
                    "_id": "6672f1f23325fea3570fc0cf",
                    "num": 114,
                    "name": "Tangela"
                },
                {
                    "_id": "6672f1f23325fea3570fc0d0",
                    "num": 115,
                    "name": "Kangaskhan"
                },
                {
                    "_id": "6672f1f23325fea3570fc0d1",
                    "num": 116,
                    "name": "Horsea"
                },
                {
                    "_id": "6672f1f23325fea3570fc0d3",
                    "num": 117,
                    "name": "Seadra"
                },
                {
                    "_id": "6672f1f23325fea3570fc0d5",
                    "num": 118,
                    "name": "Goldeen"
                },
                {
                    "_id": "6672f1f23325fea3570fc0d7",
                    "num": 119,
                    "name": "Seaking"
                },
                {
                    "_id": "6672f1f23325fea3570fc0d9",
                    "num": 120,
                    "name": "Staryu"
                },
                {
                    "_id": "6672f1f23325fea3570fc0db",
                    "num": 121,
                    "name": "Starmie"
                },
                {
                    "_id": "6672f1f23325fea3570fc0dd",
                    "num": 122,
                    "name": "Mr. Mime"
                },
                {
                    "_id": "6672f1f23325fea3570fc0de",
                    "num": 123,
                    "name": "Scyther"
                },
                {
                    "_id": "6672f1f23325fea3570fc0df",
                    "num": 124,
                    "name": "Jynx"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e0",
                    "num": 125,
                    "name": "Electabuzz"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e1",
                    "num": 126,
                    "name": "Magmar"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e2",
                    "num": 127,
                    "name": "Pinsir"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e3",
                    "num": 128,
                    "name": "Tauros"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e4",
                    "num": 129,
                    "name": "Magikarp"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e6",
                    "num": 130,
                    "name": "Gyarados"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e8",
                    "num": 131,
                    "name": "Lapras"
                },
                {
                    "_id": "6672f1f23325fea3570fc0e9",
                    "num": 132,
                    "name": "Ditto"
                },
                {
                    "_id": "6672f1f23325fea3570fc0ea",
                    "num": 133,
                    "name": "Eevee"
                },
                {
                    "_id": "6672f1f23325fea3570fc0ee",
                    "num": 134,
                    "name": "Vaporeon"
                },
                {
                    "_id": "6672f1f23325fea3570fc0f0",
                    "num": 135,
                    "name": "Jolteon"
                },
                {
                    "_id": "6672f1f23325fea3570fc0f2",
                    "num": 136,
                    "name": "Flareon"
                },
                {
                    "_id": "6672f1f23325fea3570fc0f4",
                    "num": 137,
                    "name": "Porygon"
                },
                {
                    "_id": "6672f1f23325fea3570fc0f5",
                    "num": 138,
                    "name": "Omanyte"
                },
                {
                    "_id": "6672f1f23325fea3570fc0f7",
                    "num": 139,
                    "name": "Omastar"
                },
                {
                    "_id": "6672f1f23325fea3570fc0f9",
                    "num": 140,
                    "name": "Kabuto"
                },
                {
                    "_id": "6672f1f23325fea3570fc0fb",
                    "num": 141,
                    "name": "Kabutops"
                },
                {
                    "_id": "6672f1f23325fea3570fc0fd",
                    "num": 142,
                    "name": "Aerodactyl"
                },
                {
                    "_id": "6672f1f23325fea3570fc0fe",
                    "num": 143,
                    "name": "Snorlax"
                },
                {
                    "_id": "6672f1f23325fea3570fc0ff",
                    "num": 144,
                    "name": "Articuno"
                },
                {
                    "_id": "6672f1f23325fea3570fc100",
                    "num": 145,
                    "name": "Zapdos"
                },
                {
                    "_id": "6672f1f23325fea3570fc101",
                    "num": 146,
                    "name": "Moltres"
                },
                {
                    "_id": "6672f1f23325fea3570fc102",
                    "num": 147,
                    "name": "Dratini"
                },
                {
                    "_id": "6672f1f23325fea3570fc105",
                    "num": 148,
                    "name": "Dragonair"
                },
                {
                    "_id": "6672f1f23325fea3570fc108",
                    "num": 149,
                    "name": "Dragonite"
                },
                {
                    "_id": "6672f1f23325fea3570fc10b",
                    "num": 150,
                    "name": "Mewtwo"
                },
                {
                    "_id": "6672f1f23325fea3570fc10c",
                    "num": 151,
                    "name": "Mew"

                }
            ]
        }]
    })


};

module.exports ={
    getAllPkmn,
    select
}
