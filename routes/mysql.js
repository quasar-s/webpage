var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {

    var connection = mysql.createConnection({
        host    :'localhost',
        port : 3305,
        user : 'root',
        password : '85976427d',
        database:'nodedb'
    });

    connection.connect(function(err) {
        if (err) {
            res.render('mysql', { connect: '연결 실패',err:err });
            console.error(err);
            throw err;
        }else{
            res.render('mysql', { connect: '연결 성공',err:'없음' });
        }
        if (err) throw err;
        con.query("SELECT * FROM nodedb ORDER BY idx DESC",function (err, result) {
          if (err) throw err;
          console.log(result);
        });
    });
    connection.end();
});

module.exports = router;
