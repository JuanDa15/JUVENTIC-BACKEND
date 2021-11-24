const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Server creation
const app = express();

// Base de datos
dbConnection();
// Cors
app.use( cors())


// lectura y parseo del  body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/reservas', require('./routes/bookings'));
app.use('/api/solicitudes', require('./routes/questions'));
app.use('/api/servicios', require('./routes/services'));
app.use('/api/platos',require('./routes/dishes'));
app.use('/api/comentarios', require('./routes/comments'));
app.use('/api/empleados', require('./routes/employees'));
app.use('/api/restaurante', require('./routes/restaurant'));

app.listen( process.env.PORT, ()=> {
  console.log(`Server Running in port ${ process.env.PORT }`)
}) 
