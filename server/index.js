const express = require('express');
let app = express();
var helpers = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));

const db = require('../database/index.js');
const bodyParser = require('body-parser');
app.use( bodyParser.json() );


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  // console.log('req received on express', req.body.term);
  helpers.getReposByUsername(req.body.term);
  res.end();
  
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('hey');
  // db.find('repoName', 'HR-Prep');
  // .sort('stargazers');
  
});

app.get('/', function (req, res) {
  // res.end(
  //   JSON.stringify({data: 'hey'});
  // );
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

