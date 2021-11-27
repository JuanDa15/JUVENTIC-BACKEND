const { Router } = require('express');
const { listaComentarios, crearComentario } = require('../controllers/comments.controller')

const router = Router();

//Registro
router.post('/nuevo-comentario', crearComentario)

//ver comentarios
router.get('/ver-comentarios', listaComentarios);


//Ver comentario
router.get( '/ver-comentario/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver comentario'
  })
})

//Eliminar comentario
router.get( '/eliminar-comentario/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'eliminar comentario'
  })
})



module.exports = router;