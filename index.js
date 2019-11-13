const express = require("express");
const bodyParser = require("body-parser");
const mathOps = require("./math_operations")
const animals = require("./animals")
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//------------------database-----------------------------
const URI = 'mongodb://localhost/data_base_rest_dev'

mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('base de datos conectada');
});
//---------------------------------------------------

app.use('/animals', animals)

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

/**
 * GET = Obtener
 * POST = Crear
 * PUT = Actualizar
 * DELETE = Eliminar
 */

app.get('/', function (req, res) {
    res.send('Index');
});

app.get('/suma', (req, res) => {
    res.send('SUMA = ' + mathOps.suma(req.query))
})

app.get('/resta', (req, res) => {
    res.send('RESTA = ' + mathOps.resta(req.query))
})

app.route('/user')
    .get((req, res) => {
        res.send('USER GET METHOD')
    })
    .post((req, res) => {
        res.send('USER POST METHOD')
    })

app.post('/', function (req, res) {
    console.log(req.body.Nombre)
    console.log(req.body.Apellido)
    res.send('Método POST');
})