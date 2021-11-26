const { Router } = require('express');
const { listaServicio,EditarServicio, verServicio, eliminarServicio, agregarServicio } = require('../controllers/services.controller')

const router = Router();

// Crear servicio
router.post('/nuevo-servicio', agregarServicio)

// editar servicio
router.put('/editar-servicio/:id', EditarServicio)

// Eliminar servicio
router.delete('/eliminar-servicio/:id', eliminarServicio)

// Ver servicios
router.get('/ver-servicios', listaServicio);

// Ver servicios
router.get('/ver-servicio/:id', verServicio );

module.exports = router;