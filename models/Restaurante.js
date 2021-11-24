const {Schema, model} = require('mongoose');

const RestauranteSchema = Schema({
  name: {
    type: String,
    required: true
  }
})


module.exports = model('Restaurante',RestauranteSchema)