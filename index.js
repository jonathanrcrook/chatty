const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

const messages = ['Hello', 'Joe Dirt Rocks'];

app.use(express.static('assets'));
app.use(bodyParser.json());

app.listen(port, function() {

});

app.get('/messages', function(req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next) {
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages })

});

app.delete('/messages', function(req, res, next) {
  messages.splice(1, 2);
  res.status(200).json({ messages: messages });

})
