const {response} = require('express')

const crearUsuario = (request,response = response)=>{

  console.log( request.body);

  return response.json({
    ok: true,
    msg: 'Crear usuario'
  })
}

module.exports = {
  crearUsuario
}