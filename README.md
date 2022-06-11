# JSON-como-DB

Nodejs, Express &amp; JSON como DB

## Introducción 

Esta aplicación web se guardan datos de libros con su imagen y también se eliminan, el guardado de los datos es de forma local en un `.json `. 

## tecnologías

* `Express`
* `Morgan`
* `Bootstrap`
* `Uuid`
* `Middlewere`
* `nodemon`
* `node.js`
* `HTML`
* `CSS`

## Diseño

![diagramaJsonComoDb](https://user-images.githubusercontent.com/99068430/172725458-62f3c592-d181-4627-854d-a73e6744e146.png)


`package.json`: Contiene todas las dependencias como `Express`, `Morgan`, `Uuid`, `Middlewere` y `nodemon` que son utilizadas por el programa para su funcionamiento.

`main.css`: Encargada del fondo degradado azul de las dos vistas web que son `index.ejs` y `new-entry.ejs` el degradado se bajó de la página uiGradients `https://uigradients.com/#EveningNight`.

![mainCss](https://user-images.githubusercontent.com/99068430/173169317-99f21988-84f9-4deb-9738-a77d7ae77d3f.png)

`header.ejs`: Es un archivo `.ejs` que lo usamos para escribir las partes repetibles de código y pasar los datos a nuestras vista, como en este caso la cabecera del html y también contiene la referencia del archivo `main.css`  y `bootstrap` encargado de los estilos de las páginas.
Nota: es necesario que la página web este conectada a internet para que pueda cargar los estilos ya que no se cargaron los módulos para esta web de prueba.

![header ejs](https://user-images.githubusercontent.com/99068430/173169980-d96cd460-51d4-49f9-932a-bd6e1eb0549a.png)

`navigation.ejs`: Contiene la barra de navegación para poder ingresar un libro en `New Book` o visualizar los libros en `Books` que ya han sido introducidos.

![navigation ejs](https://user-images.githubusercontent.com/99068430/173170131-3a5fed30-39d0-4991-9dbd-c9f6ad98854c.png)


