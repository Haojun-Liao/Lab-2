const db = require('../util/database.js');

async function addArtist(name, desc, image) {
    try{
        return await db.execute("INSERT INTO artists (name, desc, image) VALUES ('" + name + "', '" + desc + "', '" + image + "')");
    } catch (err) {
        console.log(err);
    }
}

async function getAllArtists() {
    try{
        return await db.execute("SELECT * FROM artists");
    } catch(err){
        console.log(err);
    }
}

async function deleteArtist(name) {
    try{
        return await db.execute("DELETE FROM artists WHERE name = '" + name + "'");
    } catch(err){
        console.log(err);
    }
}

async function search(string) {
    try{
        return await db.execute("SELECT * FROM artists WHERE name LIKE ?", ['%'+string+'%']);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    add: addArtist,
    getall: getAllArtists,
    delete: deleteArtist,
    search: search
}