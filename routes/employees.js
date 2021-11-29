const { Router } = require('express');
const router = Router();

const Empleado = require('../models/Empleado')

//nuevo empleado
router.post('/nuevo-empleado', async (request, response) => {
  try {
    const usuario = await Empleado.findOne({ name: request.body.name })
    if (usuario) {
      return response.status(400).json({ ok: false, msg: 'El empleado ya existe' })
    } else {
      let newEmployee = new Empleado(request.body)
      await newEmployee.save()
      return response.status(200).json({ ok: true, msg: 'Empleado registrado correctamente', id: newEmployee.id, name: newEmployee.name, des: newEmployee.description })
    }
  } catch (e) {
    console.log(e)
    return response.status(500).json({ ok: false, msg: 'Contacte con el admin' })
  }
})

//editar empleado
router.put('/editar-empleado/:id', async (request, response) => {
  try {
    await Empleado.updateOne({ id: request.params.id }, request.body)
  } catch (e) {
    console.log(e)
    return response.status(500).json({ ok: false, msg: 'Contacte con el admin' })
  }
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
router.get('/ver-empleado/:id', async (request, response) => {
  const empleado = await Empleado.findOne({ id: request.params.id })
  return response.json({
    ok: true,
    msg: 'ver empleado',
    empleado: empleado
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
