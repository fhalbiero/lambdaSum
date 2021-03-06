var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});



 app.post('/sum', function(req, res) {
  const { value1, value2 } = req.body;

  const result = value1 + value2;

  res.json({
    success: 'get call succeed!', 
    result
  });
});



module.exports = app
