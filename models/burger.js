var orm = require("../config/orm.js");

orm.select("*", "burgers");

// Find a pet in the pets table by an animal_name of Rachel.
orm.create("burgers", "burger_name", submitItem);

// Find the buyer with the most pets.
orm.update("burgers", {devoured:true}, {id:this});

module.exports = burger;
