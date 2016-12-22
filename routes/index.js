var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Entelijant Datttta',

  des: "This is the site that I'm building"

  });
});


router.get('/help', function(req, res, next) {
  res.render('help.hbs', { title: 'Help',

    des: "This is the help page"

  });
});
module.exports = router;
