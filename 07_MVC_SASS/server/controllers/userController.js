const mysql = require('mysql2')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usermanagement_tut'
})

exports.view = (req, res) =>{
    connection.query(`SELECT * FROM user WHERE status = "active"`, 
    (err, rows) => {
        if(!err){
            let removedUser = req.query.removed
            res.render('home', {rows, removedUser})
        } else{
            console.log(err)
        }
        console.log('The data form user table: \n', rows)
    });
}