const { Router } = require('express');
const router = Router();

const books = [];

router.get('/', (req, res) => {
    res.render('index.ejs'); //render manda a llamar al archivo index.ejs para mostrarlo
});

router.get('/new-entry', (req, res) => {
    res.render('new-entry.ejs');
});

router.post('/new-entry', (req, res) => { //Recibe los datos del libro 
    const {title, imagen, author, description} = req.body;
    if (title || imagen || author || description){
        res.status(400).send('Entries must have a title and description');
        return;
    }
    let newbook = {
        title,
        imagen,
        author,
        description
    };
    books.push(req.body);
    res.send('received');
});


module.exports = router;