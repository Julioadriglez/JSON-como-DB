const { Router } = require('express');
const router = Router();

const books = [];

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
    res.send('received');
});


module.exports = router;