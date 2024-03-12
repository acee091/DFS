const express = require('express')
const exphbs = require('express-handlebars')

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/', function(req, res){
    const shop = {
        name: 'São paulo',
        year: '1930'
    }
    res.render('home', {shop: shop})
})

app.use(express.static('public'))
app.listen(5000)

