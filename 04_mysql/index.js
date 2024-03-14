// instalações 
// npm i express express-handlebars nodemon
// npm i mysql2]

const express = require('express')
const exphbs = require('express-handlebars')

const mysql = require('mysql2')

const app = express()

app.engine('handlebars', exphbs.engine())
// vetor de inicialiazação vao ser os handlebars
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// capturar os dados do front
app.use(express.urlencoded({
    extended: true,
    }),
)
app.use(express.json())

app.get('/', function(req, res){
    res.render('home')
})

app.post('/books/insertbook', function(req,res){
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`
    conn.query(query, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})

app.get('/books', function(req,res){
    const query = `SELECT * FROM books`

    conn.query(query, function(err){
        if(err){
            console.log(err)
        }
        // data = tudo aquilo que vai receber no SELECT do banco de dados
        const books = data
        console.log(data)
        res.render('books', data)
    })
})


// conectar o mysql
const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

// criar uma conexão
conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('Conectado ao MySQL')

    app.listen(3000)
})