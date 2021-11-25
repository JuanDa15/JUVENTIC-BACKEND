const { Router } = require('express');
const { informacionRestaurante, actualizarInformacion } = require('../controllers/restaurant.controller')

const router = Router();

//Registro
router.get('/informacion-restaurante', informacionRestaurante);

//ver comentarios
router.put('/modificar-restaurante', actualizarInformacion);

module.exports = router;