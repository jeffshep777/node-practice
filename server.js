//
const express = require('express');

const app = express();

const port = 3000;

app.get('/', function(req, res){
  res.send('<h1>hello test</h1>');
});

app.get('/about', function(req, res){
  res.send('<h1>test turkey sandwich test 1111ffff22</h1>');
});

app.listen(3000, function(){
console.log('Server started on port 3000');
});
