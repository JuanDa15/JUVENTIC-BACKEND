const { Schema, model } = require('mongoose');

const EmpleadoSchema = Schema({
  id: {
    type: Number,
    required: true
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
    required: false
  }
})


module.exports = model('Empleado', EmpleadoSchema)
