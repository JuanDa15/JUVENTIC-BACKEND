const {Schema, model} = require('mongoose');

const SolicitudSchema = Schema({
  id:{
    type: Number,
    required:true
  },
  typeService: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required:true
  },
  phone: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    required:true}
    ,
  duration: {
    type: Number,
    required: true
  },
  numPerson:{
    type: Number,
    required:true
},
  indications:{
    type: String,
    required:true
  },
  status:{
    type: String,
    required:true}
})


module.exports = model('Solicitud',SolicitudSchema)