const mysql = require('mysql');
const pool = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'senyuman_id',
});

// CREATE TABLES ON DATABASE
pool.query(`SHOW TABLES LIKE 'services'`,(err,res,fields)=>{
    if(err) throw err;
    if(!res[0]){

        pool.query(`
        CREATE TABLE services (
            id int AUTO_INCREMENT PRIMARY KEY,
            title text,
            description text
        );
        `,(_err,_res)=>{

            if(_err) throw _err;
            console.log(_res);

        });

    }
});

pool.query(`SHOW TABLES LIKE 'testimonials'`,(err,res,fields)=>{
    if(err) throw err;
    if(!res[0]){

        pool.query(`
        CREATE TABLE testimonials (
            id int AUTO_INCREMENT PRIMARY KEY,
            name text,
            position text,
            quotes text,
            description text,
            avatar text
        );
        `,(_err,_res)=>{

            if(_err) throw _err;
            console.log(_res);

        });

    }
});

pool.query(`SHOW TABLES LIKE 'show_case'`,(err,res,fields)=>{
    if(err) throw err;
    if(!res[0]){

        pool.query(`
        CREATE TABLE show_case (
            id int AUTO_INCREMENT PRIMARY KEY,
            title text,
            description text,
            image text,
            url text
        );
        `,(_err,_res)=>{

            if(_err) throw _err;
            console.log(_res);

        });

    }
});

module.exports = {
    query: (query,cb = ()=>{}) =>{
        pool.query(query,(err,result,fields)=> cb(err,result,fields));
    }
}
