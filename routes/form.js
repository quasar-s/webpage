var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('form', {
        name: 'Lee seonhyeok',
        blog: 'sunhuki1.naver.com',
        homepage: 'sunhuki1.naver.com'
    });
});

module.exports = router;
router.post('/',function(req,res,next){
    res.json(req.body);}
);
