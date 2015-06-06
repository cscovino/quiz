var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', function(req, res, next){
  res.render('author', {authors: { name: 'Carlos Scovino', urlphoto: '/images/author.png'}});
});

module.exports = router;
