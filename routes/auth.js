const { Router, request } = require('express');
const { crearUsuario } = require('../controllers/auth.controller');
const bcrypt = require('bcryptjs')
const { generarjtw } = require('../helpers/jwt')
const { validarjwt } = require('../middlewares/validarjwt')

const User = require('../models/User')

const router = Router();

//Registro
router.post('/nuevo-usuario', crearUsuario)

//Ingreso
router.post('/ingresar', async (request, response) => {

  try {

    const tmp = request.body

    const currentUser = await User.findOne({ userName: tmp.correo })
    if (!currentUser) {
      return response.status(400).json({ ok: false, msg: 'El usuario no esta registrado' })
    } else {
      const verificacion = bcrypt.compareSync(tmp.password, currentUser.password)
      if (!verificacion) {
        return response.status(400).json({ ok: false, msg: 'La contraseña es incorrecta' })
      } else {
        const token = await generarjtw(currentUser.id, currentUser.role, currentUser.email, currentUser.image)
        return response.status(200).json({ ok: true, msg: 'Inicio de seccion correcto', token: token })
      }
    }

  } catch (e) {
    console.log(e)
    return response.status(400).json({ ok: false, msg: 'Contacte con el admin' })
  }

  //return response.json({
  //ok: true,
  //msg: 'ingresar'
  //})
})


//Validación JWT
router.get('/renovar', validarjwt, async (request, response) => {
  const { userId, role, email, image } = request
  const token = await generarjtw(userId, role, email, image)
  return response.status(200).json({ ok: true, msg: 'ok', token: token })
})

module.exports = router;
