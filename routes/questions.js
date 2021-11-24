const { Router } = require('express');

const router = Router();

// Guardar preguntas
router.post('/guardar-solicitudes', (request, response) => {
  return response.json({
    ok: true,
    msg: 'guardar solicitud'
  })
})

// Ver preguntas
router.get('/ver-solicitudes', (request, response) => {
  return response.json({
    ok: true,
    msg: 'ver solicitudes'
  })
})

// Ver pregunta
router.get('/ver-solicitud/:id', (request, response) => {
  return response.json({
    ok: true,
    msg: 'ver solicitud'
  })
})

module.exports = router;