const { Router } = require('express');
const { listaComentarios, crearComentario, listaComentariosEmail, eliminarComentario } = require('../controllers/comments.controller')

const router = Router();

//Registro
router.post('/nuevo-comentario', crearComentario)

//ver comentarios
router.get('/ver-comentarios', listaComentarios);

//Listar comentarios email
router.get('/ver-comentarios-email/',listaComentariosEmail);

//Eliminar comentario
router.delete('/eliminar-comentario/:id', eliminarComentario);



module.exports = router;