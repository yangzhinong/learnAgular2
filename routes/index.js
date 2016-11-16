var express = require('express');

var router = express.Router();

router.get('/', function(request, reponse) {
    reponse.render('index.html');
})


module.exports = router;