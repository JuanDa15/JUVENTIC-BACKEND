const {Schema, model} = require('mongoose');

const PedidoSchema = Schema({
  id:{
    type: Number,
    required:true
  },
  clientID: {
    type: Number,
    required: true
  },
  dishID: {
    type: Number,
    required: true
  },
  date:{
    type: Date,
    required:true
  }
})


module.exports = model('Pedido',PedidoSchema)