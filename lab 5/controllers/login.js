const model = require('../models/loginData.js');

async function login(req, res) {
    const success = await model.checkUser(req.query.username, req.query.password);
    if (success){
        res.redirect("/home")
    } else {
        res.render("login", {layout:"login-layout", loginFailed:true})
    }
}

module.exports = {
    login: login
}