let mysql = require('mysql');

let con = mysql.createConnection({
    host: "mysql.internal.srcf.net:3306",
    user: "xy352",
    password: "CojOtMirj"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});