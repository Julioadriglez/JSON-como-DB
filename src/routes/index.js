const { Router } = require('express');
const router = Router();
const fs = require('fs');

const json_books = fs.readFileSync('../src/books.json', 'utf-8',);// Lee el archivo .json
const books = JSON.parse(json_books);

router.get('/', (req, res) => {
    res.render('index.ejs', {
        books
    }); //render manda a llamar al archivo index.ejs para mostrarlo
});

router.get('/new-entry', (req, res) => {
    res.render('new-entry.ejs');
});

router.post('/new-entry', (req, res) => { //Recibe los datos del libro 
    const {title, author, image, description} = req.body;
    if(!title || !author  || !image || !description){
        res.status(400).send('Entries must have a title and description');
        return;
    }
    let newBook = {
        title,
        author,
        image,
        description
    };
    books.push(newBook);

    const json_books = JSON.stringify(books) // Se guardan datos en books.json
    fs.writeFileSync('../src/books.json', json_books, 'utf-8'); //Direccion de books.json y formato en como se guarda el string

    res.send('received');
});


module.exports = router;