const {Schema, model} = require('mongoose');

const PlatoSchema = Schema({
  id:{
    type: Number,
    required:true
  },
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required:true
  }
})


module.exports = model('Plato',PlatoSchema)