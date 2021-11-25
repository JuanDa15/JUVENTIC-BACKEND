const {Schema, model} = require('mongoose');

const ServicioSchema = Schema({
  id:{
    type: Number,
    required:true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})


module.exports = model('Servicio',ServicioSchema)