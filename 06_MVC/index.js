const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const conn = require('./db/conn')

// MODELS
const Task = require('./models/Task')

// Routes
const taskRoutes = require('./routes/tasksRouters')


app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.use('/tasks', taskRoutes)

app.use(express.static('public'))

conn
    .sync()
    .then(() =>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))

