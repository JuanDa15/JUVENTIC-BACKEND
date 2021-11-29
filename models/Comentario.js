const {Schema, model} = require('mongoose');

const ComentarioSchema = Schema({
  id:{
    type: Number,
    required:true
  },
  comment: {
    type: String,
    required: true
  },
  clientID: {
    type: Number,
    required: true
  },
  correo:{
    type:String,
    required: true
  }
})


module.exports = model('Comentario',ComentarioSchema)