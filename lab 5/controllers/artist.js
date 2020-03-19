const model = require('../models/data.js');

async function getAllArtist(req, res) {
    const data = await model.getAllArtist();
    res.render('artists', {"artists": data[0]});
}

async function addArtist(req, res) {
    const artist = req.body;
    await model.addArtist(artist.name, artist.desc, artist.icon)
    res.redirect("/home");
}

async function deleteArtist(req, res) {
    const artist = req.body;
    await model.deleteArtist(artist);
    res.redirect("/home");
}
async function search(req, res) {
    const string = req.body;
    await model.search(string);
    res.render("artists", {"artists": data})
}

module.exports = {
    getAllArtist: getAllArtist,
    addArtist: addArtist,
    deleteArtist: deleteArtist,
    search: search
}