var express = require('express');
var path = require('path');
var controller = require('../controller');
var analyzecontroller = controller.analyzer;
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.html', { title: 'Express' });
// });
router.use("/public", express.static(path.join(__dirname, '../..', 'public')));

router.get('/schedule', analyzecontroller.scheduler);

// router.post('/getaddata', computecontroller.performCalc);
module.exports = router;
