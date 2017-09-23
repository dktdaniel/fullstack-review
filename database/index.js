const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  stargazers: Number
});

var Repo = mongoose.model('Repo', repoSchema);

var save = (item) => {
  return new Repo(item).save((err, data) => {
    if (err) {
      console.log('error saving in repo', err);
    }
    // find('repoName', 'HR-Prep');
    // Repo.find({repoName: 'HR-Prep'}, (err, data) => {
    //   console.log('****************DATA**********', data);
    // });
  });
};

var find = (key, value) => {
  var object = {};
  object[key] = value;
  // console.log(object);
  Repo.find(object, (err, data) => {
    return data;
  });
};



module.exports.save = save;
module.exports.find = find;