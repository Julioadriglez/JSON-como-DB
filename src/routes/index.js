const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index.ejs'); //render manda a llamar al archivo index.ejs para mostrarlo
});

router.get('/new-entry', (req, res) => {
    res.render('new-entry.ejs');
});

router.post('/new-entry', (req, res) => {
    console.log(req.body.json);
    res.send('received');
});


module.exports = router;