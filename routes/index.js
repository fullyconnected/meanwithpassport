var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NYC Food Inspection Results',

  des: "Stay away from Nasty Places"

  });
});


router.get('/help', function(req, res, next) {
  res.render('help.hbs', { title: 'Help',

    des: "This is the help page"

  });
});
module.exports = router;
