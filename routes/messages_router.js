var express = require('express');
var router = express.Router();

const messages = ['Hello', 'Joe Dirt Rocks'];


router.get('/', function(req, res, next) {
  res.status(200).json({ messages: messages });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages })

});

router.delete('/', function(req, res, next) {
  messages.splice(1, 2);
  res.status(200).json({ messages: messages });

});


module.exports = router
