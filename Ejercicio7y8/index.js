const express = require('express');

const app = express();

let modulo = require('./modulo')
let randomNumber = require('./funcion')

app.get('/random', function (req, res) {
    modulo[randomNumber()] += 1
    res.send(modulo)
})

app.get('/borrar/:numero', function (req, res) {
    modulo[req.params.numero] = 0
    res.send(modulo)
})

app.listen(3000);