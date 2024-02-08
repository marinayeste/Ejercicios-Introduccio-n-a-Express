const express = require('express')

const app = express();

let datos = {
    nombre: 'Pepito',
    apellidos: 'Flores',
    edad: 40,
}

app.get('/datos/:nombre', function (req, res) {
    datos.nombre = req.params.nombre
    res.send(datos)
})

app.get('/datos/:apellidos', function (req, res) {
    datos.apellidos = req.params.apellidos
    res.send(datos)
})

app.get('/datos/:edad', function (req, res) {
    datos.edad = req.params.edad
    res.send(datos)
})

app.listen(3000)