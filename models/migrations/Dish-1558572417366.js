var mongoose = require('mongoose');
var Dish = require('../Dish.js');


// manipulate your data here
Dish.find().exec()
.then(results => {
  console.log(results);
  mongoose.connection.close();
});