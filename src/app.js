const express = require('express');
const app = express();
const path = require('path') //el modulo path nos permite concatenar directorios y hacerlo multiplataforma(si se aplica en linux o mac servira igual)

//Configuración (Settings)
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));


//Middleware

//Routes

//Static

module.exports = app;