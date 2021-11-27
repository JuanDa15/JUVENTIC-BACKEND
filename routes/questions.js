const { Router } = require('express');
const  Solicitud = require('../models/Solicitud');

const router = Router();

// Guardar solicitudes
router.post('/guardar-solicitudes', async(request, response) => {
  try{
    let aux = request.body;
    let temp = new Solicitud(aux);
    await temp.save();
    return response.status(200).json({
      ok: true,
      msg: 'Mensaje guardado correctamente'
    })

  }catch(error){
    console.log(error);
    return response.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
})

// Ver solicitudes
router.get('/ver-solicitudes', async(request, response) => {
  try{
    let temp = await Solicitud.find({}, {_id: 0,__v:0});
    return response.status(200).json({
      ok: true,
      info:temp
    })

  }catch(error){
    console.log(error);
    return response.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
})

// Ver pregunta
router.get('/ver-solicitud/:id', async (req,res) => {
  try{
    let id = req.params.id;
    let temp = await Solicitud.find({id:id},{_id:0,__v:0});
    return res.json({
      ok:true,
      info: temp
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }
})

router.delete('/eliminar-solicitud/:id', async (req,res = response) => {
  try{
    let id = req.params.id;
    let temp = await Solicitud.findOneAndDelete({id: id});
    
    return res.json({
      ok:true,
      msg: 'Eliminado correctamente'
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
}})

router.put('/modificar-solicitud/:id', async (req,res) => {
  try{
    let body = req.body;
    let id = req.params.id;
    let temp = await Solicitud.findOneAndUpdate({id:id},body,{new:true});
    
    return res.json({
      ok:true,
      info: temp
    })
  }catch(error){
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Contacte con el administrador del sistema'
    })
  }})

module.exports = router;