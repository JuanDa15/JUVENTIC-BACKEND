const { Router } = require('express');

const router = Router();

//Registro
router.post('/nuevo-comentario', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'Crear comentario'
  })
})

//ver comentarios
router.get('/ver-comentarios', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver comentarios'
  })
})


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