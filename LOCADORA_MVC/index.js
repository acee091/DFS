const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const conn = require('./db/conn')

// MODELS
const Car = require('./models/Car')
const Cliente = require('./models/Cliente')
const Reserva = require('./models/Reserva')

// Routes
const carRouters = require('./routes/carRoutes')
const clienteRouters = require('./routes/clienteRoutes')
const reservaRouters = require('./routes/reservaRoutes')

app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.use('/Car', carRouters)


app.use(express.static('public'))

conn
    .sync()
    .then(() =>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))

