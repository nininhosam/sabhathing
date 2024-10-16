const express = require('express')
var cors = require('cors')
var mysql = require('mysql2');
const app = express()
const port = 3000
app.use(cors())

app.get('/', (req, res) => {
    var con = mysql.createConnection({
        host: "3.95.93.211",
        database: "sabha",
        user: "peixe",
        password: "fatec"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("select * from people", function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            res.send(result)
          });
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})