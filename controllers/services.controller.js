const { response } = require('express');
const Servicio = require('../models/Servicio');

const listaServicio = async (req,res=response)=>{

  try{

    let listaServicios = await Servicio.find();

    if(listaServicios){
      let temp = [];

      listaServicios.map(servicio => {
        let tempServicio = {
          id: servicio.id,
          name: servicio.name,
          description: servicio.description,
          image: servicio.image
        }

        temp.push(tempServicio);
      });

      return res.json({
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
  listaServicio
}