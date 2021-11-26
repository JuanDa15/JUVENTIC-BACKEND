const { Router } = require('express');
const { agregarPlato, listarPlatos, eliminarPlato,VerPlato,EditarPlato} = require('../controllers/dishes.controller')

const router = Router();

// Agregar
router.post('/nuevo-plato', agregarPlato)

// Editar
router.put('/editar-plato/:id',EditarPlato )
// Eliminar
router.delete('/eliminar-plato/:id', eliminarPlato);
// Listar platos
router.get('/ver-platos', listarPlatos);
// Ver plato
router.get('/ver-plato/:id', VerPlato);

module.exports = router;