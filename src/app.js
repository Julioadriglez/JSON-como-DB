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
app.use(require('./routes/index'));


//Static
app.use(express.static(path.join(__dirname, 'public'))); //le dice a express donde esta la carpeta public

// 404 handler
app.use((req, res, next) => { //esto es por si pasa todo el codigo y no encuentra lo que busca mandara el error 
    res.status(404).send('404 Not found'); // 404 archivo no encontrado
})

module.exports = app;