var express = require('express');
var router = express.Router();

    router.get('/', function(req, res, next) {
        res.render('../views/index.html', {
            "title":'WELCOME'
        });
        res.end();
    }); 

    router.get('/library', function(req, res, next) {
        res.render('../views/library.html', {
            "title":'Library'
        });
        res.end();
    }); 

    module.exports = router;