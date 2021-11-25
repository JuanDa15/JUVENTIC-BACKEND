const { response } = require('express');
const  Plato = require('../models/Plato');

const listaReserva = async (req,res=response)=>{

  try{
    let reservaTemp = await new Plato({
      id: new Date().getTime(),
      name: 'Carne Asada',
      description: 'Descripcion de plato de prueba',
      image: 'menu2@2x.png'
    });

    await reservaTemp.save();

    return res.status(200).json({
      ok: true,
      msg: 'xss'
    })

  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
}

module.exports = {
  listaReserva
}