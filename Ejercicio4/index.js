const express = require('express')

const app = express();

let saludarEnExpress = require('./funcion')

app.get('/Saludo/:nombre', function (req, res) {
    res.send(saludarEnExpress(req.params.nombre));
})

app.listen(3000);