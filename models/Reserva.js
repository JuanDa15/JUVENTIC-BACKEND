const {Schema, model} = require('mongoose');

const ReservaSchema = Schema({
  id:{
    type: Number,
    required:true
  },
  clientID: {
    type: Number,
    required: true
  },
  serviceID: {
    type: Number,
    required: true
  },
  date:{
    type: Date,
    required: true
  }
})


module.exports = model('Reserva',ReservaSchema)