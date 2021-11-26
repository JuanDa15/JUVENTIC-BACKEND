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

const eliminarServicio = async (req,res = response) => {
  try{
    let id = req.params.id;
    let temp = await Servicio.findOneAndDelete({id: id});
    
    return res.json({
      ok:true,
      msg: 'Eliminado correctamente'
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
}

const agregarServicio = async (req,res=response) => {
  try{
    let info = req.body;
    let temp = new Servicio(info);
    await temp.save();
    return res.json({
      ok:true,
      msg: 'Creado correctamente'
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
}

const verServicio = async (req,res = response) => {
  try{
    let id = req.params.id;
    let temp = await Servicio.find({id:id},{_id:0,__v:0});
    return res.json({
      ok:true,
      info: temp
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
}

const EditarServicio = async (req,res = response) => {
  try{
    let body = req.body;
    let id = req.params.id;
    let temp = await Servicio.findOneAndUpdate({id:id},body,{new:true});
    
    return res.json({
      ok:true,
      info: temp
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
  listaServicio,
  eliminarServicio,
  agregarServicio,
  verServicio,
  EditarServicio
}