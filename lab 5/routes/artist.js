const express = require('express');
const artist = require('../controllers/artist.js');
const router = express.Router();

router.get('/home', artist.getAllArtists);

router.post('/add', artist.addArtist);

router.post('/delete', artist.deleteArtist);

module.exports = router;