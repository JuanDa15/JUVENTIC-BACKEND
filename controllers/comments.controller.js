const { response } = require('express');
const Comentario = require('../models/Comentario');

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

module.exports = {
  listaComentarios
}