const { response } = require('express')
const bcrypt = require('bcryptjs')
const { generarjtw } = require('../helpers/jwt')

const crearUsuario = async (request, response = response) => {

  const User = require('../models/User')

  const { id, name, role, userName, password, email } = request.body

  try {
    let usuario = await User.findOne({ userName: userName })
    if (usuario) {
      return response.status(400).json({ ok: false, msg: 'El usuario ya esta registrado' })
    } else {
      let newUser = new User(request.body)
      const salt = bcrypt.genSaltSync()
      newUser.password = bcrypt.hashSync(password, salt)
      const token = await generarjtw(id, role, email)
      await newUser.save()
      return response.status(200).json({ ok: true, msg: 'Usuario creado correctamente', id: newUser.id, userName: newUser.userName, token: token })
    }
  } catch (e) {
    console.log(e)
    return response.status(500).json({ ok: false, msg: 'Contacte con el admin' })
  }

}

module.exports = {
  crearUsuario
}
