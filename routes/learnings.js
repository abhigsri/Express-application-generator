var express = require('express');
var router = express.Router();

/* GET learnings listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('learnings', { title: 'ABHIGSRI' });
});

module.exports = router;