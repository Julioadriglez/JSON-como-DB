const express = require('express');
const app = express();
const path = require('path'); //el modulo path nos permite concatenar directorios y hacerlo multiplataforma(si se aplica en linux o mac servira igual)
const morgan = require('morgan');

//Configuración (Settings)
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));//Le idce a express donde se encuentra views
app.set('views engine', 'ejs'); //Se establece el motor de plantilas

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //esta linea entiende los datos que vienen de los formularios y convertirlo en un formato json para utilizarlos


//Routes

//Static

module.exports = app;