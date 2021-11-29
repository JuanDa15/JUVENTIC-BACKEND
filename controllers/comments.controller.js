const { response } = require('express');
const Comentario = require('../models/Comentario');


const crearComentario = async(req,res=response) =>{
  try{
    let info = req.body;
    let temp = new Comentario(info);
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

const listaComentarios = async (req,res=response)=>{

  try{
    let comentarios = await Comentario.find();

    if(comentarios){
      let temp = [];

      comentarios.map(comentario => {
        let tempComentario = {
          id: comentario.id,
          comment: comentario.comment,
          clienteID: comentario.clienteID
        }

        temp.push(tempComentario);
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

const listaComentariosEmail = async(req,res=response)=>{
  try{
    let comentarios = await Comentario.find();
    return res.json({
      ok:true,
      info: comentarios,
      msg: 'Comentarios del Cliente'
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
}

const eliminarComentario = async(req,res=response)=>{
  try{
    let id = req.params.id;
    let temp = await Comentario.findOneAndDelete({id: id});
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

module.exports = {
  listaComentarios,
  crearComentario,
  eliminarComentario,
  listaComentariosEmail
}