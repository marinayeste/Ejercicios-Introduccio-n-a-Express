const express = require('express');

const app = express();

app.get('/:numero', function (req, res) {
    let numero = req.params.numero;
    res.send('Este es el número' + ' ' + Math.floor(Math.random() * numero) + 1);
})

app.listen(3000);