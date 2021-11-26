const { response } = require('express');
const Plato = require('../models/Plato');


const agregarPlato = async (req,res=response) => {
  try{
    let info = req.body;
    let temp = new Plato(info);
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
const listarPlatos = async (req,res = response) => {
  try{
    let temp = await Plato.find({},{_id:0,__v:0});
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
const eliminarPlato = async (req,res = response) => {
  try{
    let id = req.params.id;
    let temp = await Plato.findOneAndDelete({id: id});
    
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
const VerPlato = async (req,res = response) => {
  try{
    let id = req.params.id;
    let temp = await Plato.find({id:id},{_id:0,__v:0});
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

const EditarPlato = async (req,res = response) => {
  try{
    let body = req.body;
    let id = req.params.id;
    let temp = await Plato.findOneAndUpdate({id:id},body,{new:true});
    
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
  agregarPlato,
  listarPlatos,
  eliminarPlato,
  VerPlato,
  EditarPlato
}
