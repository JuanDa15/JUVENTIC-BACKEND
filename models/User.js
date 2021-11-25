const {Schema, model} = require('mongoose');

const UserSchema = Schema({
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
  role:{
    type: Number,
    required:true
  },
  userName:{
    type: String,
    required: true
  },
  password:{
    type:String,
    required: true
  }
})


module.exports = model('User',UserSchema)