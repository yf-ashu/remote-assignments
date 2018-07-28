var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/getData', function (req, res, next) {
  var main = parseInt(req.query.number);
  console.log(typeof main)
  if (!req.query.number) {
    res.render('index', {
      title: "Wrong Parameters"
    });
  } else {
    if ( isNaN(main)) {
      console.log('裡面:'+typeof main)
      res.render('index', {
        title: "Wrong Parameters"
      });
    } else {
      let total=0
      for(let i=0;i<=main;i++){
        total+=i;
      }
      console.log('totle:'+total)
      res.json(total);
      // res.render('index', {
      //   title: total
      // });
      
    }
  }


});


module.exports = router;