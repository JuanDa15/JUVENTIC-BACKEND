const { Router } = require('express');
const { informacionRestaurante } = require('../controllers/restaurant.controller')

const router = Router();

//Registro
router.get('/informacion-restaurante', informacionRestaurante);

//ver comentarios
router.put('/modificar-restaurante', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver comentarios'
  })
})

module.exports = router;