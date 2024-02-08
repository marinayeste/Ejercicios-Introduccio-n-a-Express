const express = require('express');

const app = express();

app.get('/persona', function (req, res) {
    res.send(['Pepe', 'Luis', 'Ana', 'Lucas', 'Teresa'])
})

app.get('/persona/:nombre', function (req, res) {
    let nombre = req.params.nombre
    res.send('Hola' + ' ' + nombre)
})

app.listen(3000);