
const express = require('express')

const port = 5000;
const app = express()
var router = express.Router()

const path = require('path')

app.listen(port, ()=>{
    console.log(`App rodando na porta: ${port}`)
})

const basePath = path.join(__dirname, 'PAGINAS')

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/page1.html`)
})

app.get('/cb', (req, res) =>{
    res.sendFile(`${basePath}/page2.html`)
})

app.use(express.static('public'))

module.exports = router