const request = require('request');
const config = require('../config.js');

const bodyParser = require('body-parser');
const db = require('../database/index.js');

let getReposByUsername = (username, res) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, (err, data) => {
    console.log('sent request to github!');
    if(err) {
      console.log('error in github request', err);
    };
    // console.log(data.body);
    var parsedArray = JSON.parse(data.body);
    var namesAndStars = parsedArray.map((item)=> {
      return {id: item.id,
              repoName: item.name, 
              stargazers: item.stargazers_count,
              url: item.html_url}
    });
    Promise.all(namesAndStars.map((repoItem) => {
      db.save(repoItem)
      }
    ))
    .then((saveResult) => {
        res.redirect('/repos');
    })
    .catch((err) => {
      console.log(err);
    });
  });

}

module.exports.getReposByUsername = getReposByUsername;