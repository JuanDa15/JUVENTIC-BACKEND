const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarjwt = (request, response = response, next) => {
  const token = request.header('x-access-token')
  if (!token) {
    return response.status(400).json({ ok: false, msg: 'Contacte con el admin' })
  } else {
    try {
      const { userId, role, email } = jwt.verify(token, process.env.SECRET_KEY)
      request.userId = userId;
      request.role = role;
      request.email = email;
    } catch (error) {
      console.log(error)
      return response.status(400).json({ ok: false, msg: 'Contacte con el admin' })
    }
  }
  next()
}

module.exports = { validarjwt }
