const { Router } = require('express');
const { crearUsuario } = require('../controllers/auth.controller');

const router = Router();

//Registro
router.post( '/nuevo-usuario', crearUsuario)

//Ingreso
router.post( '/ingresar', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'ingresar'
  })
})


//Validación JWT
router.get( '/renovar', (request,response)=>{
  return response.json({
    ok: true,
    msg: 'renew'
  })
})



module.exports = router;