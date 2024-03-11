const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.get('/', function(req, res) {
    const user = {
        name: 'Rodolfo',
        surname: 'Gonçalves'
    }

    
    res.render('home', {user: user, auth: true} )
})

app.get('/dashbord', function(req, res){
    res.render('dashbord');
});
app.listen(3000)