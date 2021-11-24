const { Router } = require('express');

const router = Router();

//nuevo empleado
router.post('/nuevo-empleado', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'Crear empleado'
  })
})

//editar empleado
router.put('/editar-empleado/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'editar empleado'
  })
})


//eliminar empleado
router.delete( '/eliminar-empleado/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'eliminar empleado'
  })
})

//ver  empleado
router.get( '/ver-empleado/:id', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver empleado'
  })
})

//ver  empleado
router.get( '/ver-empleados', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ver empleados'
  })
})

module.exports = router;