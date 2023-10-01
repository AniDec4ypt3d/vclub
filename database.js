const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql-vclub.alwaysdata.net',
    user: 'vclub',
    password: 'Ani@1234',
    database: 'vclub_test'
});
connection.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log('Mysql Database is connected.')
    }
})

module.exports =connection;