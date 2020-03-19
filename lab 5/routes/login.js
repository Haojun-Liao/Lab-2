const express = require('express');
const login = require('../controllers/login.js');
const router = express.Router();

router.get('/login', (req, res) => {
    login.check(req, res);
});


module.exports = router;