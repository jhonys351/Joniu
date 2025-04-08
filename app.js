const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'petmax'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM animais', (err, results) => {
        if (err) throw err;
        res.render('index', { animais: results });
    });
});

app.get('/inserir', (req, res) => {
    res.render('form');
});

app.post('/inserir', (req, res) => {
    const { nome, tipo, raca, nascimento } = req.body;
    db.query('INSERT INTO animais (nome, tipo, raca, nascimento) VALUES (?, ?, ?, ?)',
        [nome, tipo, raca, nascimento], (err) => {
            if (err) throw err;
            res.redirect('/');
        });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
