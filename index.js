const express = require('express');
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
app.listen(4000, () => {
	console.log(`Servidor corriendo 4000`);
});
