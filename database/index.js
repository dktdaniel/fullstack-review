const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  stargazers: Number,
  url: String
});

var Repo = mongoose.model('Repo', repoSchema);

var save = (item) => {
  return new Repo(item).save((err, data) => {
    if (err) {
      console.log('error saving in repo', err);
    }
  });
};

var find = () => {
  return Repo.find({}, (err, data) => {
    return data;
  }).limit(25).sort({stargazers: -1});
};



module.exports.save = save;
module.exports.find = find;