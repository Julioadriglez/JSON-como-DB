const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index.ejs'); //render manda a llamar al archivo index.ejs para mostrarlo
});

module.exports = router;