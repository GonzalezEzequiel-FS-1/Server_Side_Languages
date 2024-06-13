//I would love this to interact with the main code, maybe return an array with the optimal load out for each gym leader or battle.
//Still got no Idea on the best application
const strengthsAndWeaknesses = [
    {
        normal: {
            strengths: {
                types: []
            },
            weaknesses: {
                types: ["Fighting"]
            },
            immunities: {
                types: ["Ghost"]
            }
        }
    },
    {
        fire: {
            strengths: {
                types: ["Grass", "Ice", "Bug"]
            },
            weaknesses: {
                types: ["Water", "Ground", "Rock"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        water: {
            strengths: {
                types: ["Fire", "Ground", "Rock"]
            },
            weaknesses: {
                types: ["Electric", "Grass"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        electric: {
            strengths: {
                types: ["Water", "Flying"]
            },
            weaknesses: {
                types: ["Ground"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        grass: {
            strengths: {
                types: ["Water", "Ground", "Rock"]
            },
            weaknesses: {
                types: ["Fire", "Ice", "Poison", "Flying", "Bug"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        ice: {
            strengths: {
                types: ["Grass", "Ground", "Flying", "Dragon"]
            },
            weaknesses: {
                types: ["Fire", "Fighting", "Rock", "Steel"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        fighting: {
            strengths: {
                types: ["Normal", "Ice", "Rock"]
            },
            weaknesses: {
                types: ["Flying", "Psychic", "Fairy"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        poison: {
            strengths: {
                types: ["Grass", "Fairy"]
            },
            weaknesses: {
                types: ["Ground", "Psychic"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        ground: {
            strengths: {
                types: ["Fire", "Electric", "Poison", "Rock", "Steel"]
            },
            weaknesses: {
                types: ["Water", "Grass", "Ice"]
            },
            immunities: {
                types: ["Electric"]
            }
        }
    },
    {
        flying: {
            strengths: {
                types: ["Grass", "Fighting", "Bug"]
            },
            weaknesses: {
                types: ["Electric", "Ice", "Rock"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        psychic: {
            strengths: {
                types: ["Fighting", "Poison"]
            },
            weaknesses: {
                types: ["Bug", "Ghost", "Dark"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        bug: {
            strengths: {
                types: ["Grass", "Psychic", "Dark"]
            },
            weaknesses: {
                types: ["Fire", "Flying", "Rock"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        rock: {
            strengths: {
                types: ["Fire", "Ice", "Flying", "Bug"]
            },
            weaknesses: {
                types: ["Water", "Grass", "Fighting", "Ground", "Steel"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        ghost: {
            strengths: {
                types: ["Psychic", "Ghost"]
            },
            weaknesses: {
                types: ["Ghost", "Dark"]
            },
            immunities: {
                types: ["Normal", "Fighting"]
            }
        }
    },
    {
        dragon: {
            strengths: {
                types: ["Dragon"]
            },
            weaknesses: {
                types: ["Ice", "Dragon", "Fairy"]
            },
            immunities: {
                types: []
            }
        }
    },
    {
        fairy: {
            strengths: {
                types: ["Fighting", "Dragon", "Dark"]
            },
            weaknesses: {
                types: ["Poison", "Steel"]
            },
            immunities: {
                types: ["Dragon"]
            }
        }
    },
    {
        steel: {
            strengths: {
                types: ["Ice", "Rock", "Fairy"]
            },
            weaknesses: {
                types: ["Fire", "Fighting", "Ground"]
            },
            immunities: {
                types: ["Poison"]
            }
        }
    },
    {
        dark: {
            strengths: {
                types: ["Ghost", "Psychic"]
            },
            weaknesses: {
                types: ["Fighting", "Bug", "Fairy"]
            },
            immunities: {
                types: ["Psychic"]
            }
        }
    }
];

// Double damage, Its SUPER EFFECTIVE!!!
strengthsAndWeaknesses.forEach(typeObj => {
    const typeName = Object.keys(typeObj)[0];
    const strengths = typeObj[typeName].strengths.types;
    // Looping through all the weakness types and checking for effectiveness.
    strengths.forEach(strength => {
        strengthsAndWeaknesses.forEach(targetObj => {
            const targetTypeName = Object.keys(targetObj)[0];
            const weaknesses = targetObj[targetTypeName].weaknesses.types;
            if (weaknesses.includes(typeName) && !strengths.includes(targetTypeName)) {
                strengths.push(targetTypeName);
            }
        });
    });
});

console.log(strengthsAndWeaknesses);
