const { Router } = require('express');

const router = Router();

// Crear servicio
router.post('/nuevo-servicio', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'Crear servicio'
  })
})

// editar servicio
router.put('/editar-servicio/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'editar servicio'
  })
})

// Eliminar servicio
router.delete('/eliminar-servicio/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'eliminar servicio'
  })
})

// Ver servicios
router.get('/ver-servicios', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver servicios'
  })
})

// Ver servicios
router.get('/ver-servicio', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver servicio'
  })
})

module.exports = router;