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

exports.form = (req,res) => {
    res.render('adduser');
}

exports.create = (req,res) => {
    // res.render('adduser');
    const {first_name, last_name, email, phone, comments} = req.body;
    pool.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected as ID '+ connection.threadId);
        let searchTerm = req.body.search;
        connection.query('INSERT into user SET first_name=?, last_name=?, email=?, phone=?, comments=?',[first_name,last_name,email,phone,comments],(err,rows) => {
            connection.release();
            if(!err){
                res.render('adduser',{alert : 'User added successfully'});
            }
            else{
                console.log(err);
            }
            console.log("The data from the user table : \n",rows);  
        });
    });
}

exports.edit = (req,res) => {
    // res.render('edituser');
    pool.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected as ID '+ connection.threadId);
        connection.query('SELECT *  FROM user WHERE id = ?',[req.params.id], (err,rows) => {
            connection.release();
            if(!err){
                res.render('edituser',{ rows });
            }
            else{
                console.log(err);
            }
            console.log("The data from the user table : \n",rows);  
        });
    });
}

exports.update = (req,res) => {
    const {first_name, last_name, email, phone, comments} = req.body;
    pool.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected as ID '+ connection.threadId);
        connection.query('UPDATE user SET first_name=?, last_name=?, email=?, phone=?, comments=? where id = ?',[first_name,last_name,email,phone,comments,req.params.id], (err,rows) => {
            connection.release();
            if(!err){
                res.render('edituser',{alert : `${first_name} updated successfully` });
            }
            else{
                console.log(err);
            }
            console.log("The data from the user table : \n",rows);  
        });
    });
}

exports.delete = (req,res) => {
    // res.render('edituser');
    pool.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected as ID '+ connection.threadId);
        connection.query('DELETE  FROM user WHERE id = ?',[req.params.id], (err,rows) => {
            connection.release();
            if(!err){
                res.redirect('/');
            }
            else{
                console.log(err);
            }
            console.log("The data from the user table : \n",rows);  
        });
    });
}