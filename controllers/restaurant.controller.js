const { response } = require('express');
const Restaurante = require('../models/Restaurante');


const informacionRestaurante =async (req,res= response)=>{

  try{
    let temp = await Restaurante.find();
    
    if( temp ){
      return res.status(200).json({
        ok: true,
        info: temp
      })
    }
    
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
}

module.exports = {
  informacionRestaurante
}