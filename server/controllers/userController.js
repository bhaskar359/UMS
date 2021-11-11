const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
});

exports.view = (req,res) => {
    pool.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected as ID '+ connection.threadId);
        connection.query('SELECT *  FROM user', (err,rows) => {
            connection.release();
            if(!err){
                res.render('home',{ rows });
            }
            else{
                console.log(err);
            }
            console.log("The data from the user table : \n",rows);  
        });
    });
}

exports.find = (req,res) => {
    pool.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected as ID '+ connection.threadId);
        let searchTerm = req.body.search;
        connection.query('SELECT *  FROM user WHERE first_name LIKE ? OR last_name LIKE ? OR email LIKE ?', ['%'+searchTerm+'%','%'+searchTerm+'%','%'+searchTerm+'%'], (err,rows) => {
            connection.release();
            if(!err){
                res.render('home',{ rows });
            }
            else{
                console.log(err);
            }
            console.log("The data from the user table : \n",rows);  
        });
    });
}