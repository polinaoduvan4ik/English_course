const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const express = require('express');
const fs = require('fs');
var app = express();

const options = {
    key: fs.readFileSync('./cert.key'),
    cert: fs.readFileSync('./cert.pem')
};
const userRouter = require('./routers/userRouter');
const testRouter = require('./routers/testRouter');
const questionRouter = require('./routers/questionRouter');
const levelRouter = require('./routers/levelRouter');
const replyRouter = require('./routers/replyRouter');

app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(__dirname + '/static'))
app.use('/user',userRouter);
app.use('/test',testRouter);
app.use('/question',questionRouter);
app.use('/level',levelRouter);
app.use('/reply',replyRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found")
})

var httpServer = http.createServer(app); 
var httpsServer = https.createServer(options,app)

httpServer.listen(4001);
httpsServer.listen(4000);