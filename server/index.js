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
  
  helpers.getReposByUsername(req.body.term);
  res.redirect('/');
  
});

app.get('/repos', function (req, res) {

  db.find()
  .then((findResults) => {
    res.send(findResults);
  });

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

