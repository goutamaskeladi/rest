const router = require('express').Router();

router.get('/person', (req, res) => {
    res.send('You have requested a person');
})

router.get('/user', (req, res) => {
    if(req.query.name) {
        res.send(`Hello, ${req.query.name}`)
    } else {
        res.send(`May i know your name?`)
    }
})

router.get('/person/:name', (req, res) => {
    res.send(`You have requested a person ${req.params.name}`);
})

module.exports = router;