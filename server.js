const express = require('express')
const path = require("path");
const AuthController = require("./src/controllers/auth.controller");
const PORT = 3000;

const app = express();

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')))

app.get('/login', AuthController.showFormLogin)

app.get('/admin/dashboard', (req, res) => {
    res.render('admin/dashboard')
})

app.get('/admin/users', (req, res) => {
    res.render('admin/users/list')
})

app.listen(PORT, 'localhost', () => {
    console.log('server listening on port ' + PORT)
})
