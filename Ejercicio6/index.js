const express = require('express')

const app = express();

let estudiantes = ['Pepe', 'Luis', 'Paco', 'Victor', 'Maria', 'Esther']

app.get('/curso/:nombre', function (req, res) {
    estudiantes.push(req.params.nombre)
    res.send(estudiantes)
})

app.listen(3000);