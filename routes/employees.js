const { Router } = require('express');
const router = Router();

const Empleado = require('../models/Empleado')

//nuevo empleado
router.post('/nuevo-empleado', (request, response) => {
  return response.json({
    ok: true,
    msg: 'Crear empleado'
  })
})

//editar empleado
router.put('/editar-empleado/:id', (request, response) => {
  return response.json({
    ok: true,
    msg: 'editar empleado'
  })
})


//eliminar empleado
router.delete('/eliminar-empleado/:id', async (request, response) => {
  await Empleado.findByIdAndDelete(request.params.id)
  console.log(request.body.token)
  return response.json({
    ok: true,
    msg: 'eliminar empleado'
  })
})

//ver  empleado
router.get('/ver-empleado/:id', (request, response) => {
  return response.json({
    ok: true,
    msg: 'ver empleado'
  })
})

//ver  empleado
router.get('/ver-empleados', async (request, response) => {
  const empleados = await Empleado.find()
  return response.json({
    ok: true,
    msg: 'ver empleados',
    empleados: empleados
  })
})

module.exports = router;
