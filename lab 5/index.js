const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

const expresshbs = require('express-handlebars');
const loginRoute = require('./routes/login.js');
const artistRoute = require('./routes/artist.js')

app.engine(
    'hbs',
    expresshbs({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

app.get("/", (req, res) => {
    res.render('login', {layout: "login-layout"});
})
// app.use(express.static(path.join(__dirname,'/public')));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use(loginRoute);
app.use(artistRoute);

// app.post('/add', function (req, res) {
//     fs.readFile('example.json', (err, data) => {
//         if (err) return;
//         var list = JSON.parse(data);
//         list.push(req.body);
//         fs.writeFile("example.json", JSON.stringify(list), "utf8", (err) => {
//             if (err) {
//             console.log(err);
//             } else {
//             console.log("File successfully written to!");
//             }
//         });
//     });
// });

// app.post('/delete', function (req, res) {
//     fs.readFile('example.json', (err, data) => {
//         if (err) return;
//         var list = JSON.parse(data);
//         list.forEach((e, i, a) => {
//             if (e.name == req.body.name){
//                 a.splice(i, 1);
//                 fs.writeFile('example.json', JSON.stringify(a), (err) => {
//                     if (err) return;
//                 })
//                 return;
//             }
//         })
//     })
// })

// app.get('/load', function (req, res) {
//     fs.readFile('example.json', (err, data)=>{
//         if (err) {
//             console.log(err);
//               return;
//             };
//         return res.json(JSON.parse(data));
//     })
// })

// app.get('/search', (req, res) => {
//     fs.readFile('example.json', (err, data) => {
//       if (err) {
//         console.log(err);
//           return;
//         };
//       return res.json(JSON.parse(data));
//     })
// })


app.listen(process.env.PORT || 3000, () => console.log("server is up!"));