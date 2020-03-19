const db = require('../util/database');

async function checkUser(username, password){
    return await db.execute("SELECT * FROM users WHERE username = '" + username + "' && password = '" + password + "'");
}

module.exports = {
    auth: authorize
}