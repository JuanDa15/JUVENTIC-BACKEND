const {Schema, model} = require('mongoose');

const RestauranteSchema = Schema({
  name: {
    type: String,
    required: true
  },
  history: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})


module.exports = model('Restaurante',RestauranteSchema)