const express = require('express');
const bodyParser  = require('body-parser');
const app = express();

var cors=require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  return res.send('hello AOS');
});

app.get('/test', function(req, res) {
  return res.send(req.query);
});

app.post('/verify', function(req, res) {
  console.log(req.body);
  var result = '';
  if(req.body.login == 'zkara.chaimae@gmail.com' && req.body.password == 'aos')
    result = true;
  else result = false;
  return res.send({'loginResult': result});
});

app.listen(3001, function() {
  console.log('Server is running on port 3001...');
});
