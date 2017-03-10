const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

var messagesRouter = require('./routes/messages_router');

app.use(express.static('assets'));
app.use(bodyParser.json());
app.use('/messages', messagesRouter)


app.listen(port, function() {

});
