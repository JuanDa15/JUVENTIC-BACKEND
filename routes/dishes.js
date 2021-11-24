const { Router } = require('express');

const router = Router();

// Agregar
router.post('/nuevo-plato', (request,response) => {
  return response.json({
    ok:true,
    msg: 'Crear plato'
  })
})

// Editar
router.put('/editar-plato/:id', (request,response) => {
  return response.json({
    ok:true,
    msg: 'Editar plato'
  })
})
// Eliminar
router.delete('/eliminar-plato/:id', (request,response) => {
  return response.json({
    ok:true,
    msg: 'eliminar plato'
  })
})
// Listar platos
router.get('/ver-platos', (request,response) => {
  return response.json({
    ok:true,
    msg: 'ver platos platos'
  })
})
// Ver plato
router.get('/ver-plato:/id', (request,response) => {
  return response.json({
    ok:true,
    msg: 'ver plato'
  })
})

module.exports = router;