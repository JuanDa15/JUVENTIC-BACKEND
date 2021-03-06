const jwt = require('jsonwebtoken')

const generarjtw = (userId, role, email, image) => {
  const payload = { userId, role, email, image }
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '1h'
    }, (error, token) => {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(token)
      }
    })
  })
}

module.exports = { generarjtw }
