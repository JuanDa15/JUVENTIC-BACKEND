const { Router } = require('express');

const router = Router();

//Registro
router.get('/informacion-restaurante', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'Crear comentario'
  })
})

//ver comentarios
router.put('/modificar-restaurante', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver comentarios'
  })
})

module.exports = router;