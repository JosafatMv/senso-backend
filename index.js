const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del  body
app.use(express.json());

// Rutas
app.use('/api/surveys', require('./routes/surveys'));
app.use('/api/answers', require('./routes/answers'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo ${process.env.PORT}`);
});
