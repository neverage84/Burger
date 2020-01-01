var orm = require("../config/orm.js");

var burger = {
    all:function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(vals, cb) {
        orm.create("burgers", "burger_name", vals, function(res) {
          cb(res);
        });
      }
}

// Find a pet in the pets table by an animal_name of Rachel.
// orm.create("burgers", "burger_name","Chicken Patty");

// Find the buyer with the most pets.
//orm.update("burgers", {devoured:true}, {id:3});

module.exports = burger;
