const { Router } = require('express');
const { listaReserva } = require('../controllers/bookings.controller')
const router = Router();

// Guardar reserva
router.post( '/guardar-reserva', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'Agregar reserva'
  })
})

// Eliminar reserva
router.delete( '/eliminar-reserva/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'eliminar reserva'
  })
})

// Ver reservas
router.get( '/ver-reservas', listaReserva)

// Ver reserva
router.get( '/ver-reserva/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver reserva'
  })
})

module.exports = router;