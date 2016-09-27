var _ = require('lodash');

var users = [
  {"id": 1, "username": "zeldman", "name": "Jeffery Zeldman", role: "Developer"},
  {"id": 2, "username": "b_green", "name": "Brad Green", role: "Developer"},
  {"id": 3, "username": "Meyer the Eric", "name": "Eric A. Meyer", role: "QA"},
  {"id": 4, "username": "GP", "name": "Gregg Pollack",role: "Developer"},
  {"id": 5, "username": "r_higley", "name": "Rachel Higley", role: "Developer"},
  {"id": 6, "username": "zach", "name": "Zachary Nicoll",role: "Developer"},
  {"id": 7, "username": "renz", "name": "Adam Rensel",role: "QA"},
  {"id": 8, "username": "ItsThrillhouse", "name": "Jason Millhouse", role: "Developer"},
  {"id": 9, "username": "OlivierLacan","name": "Olivier Lacan",role: "Developer"},
  {"id": 10, "username": "theSmith", "name": "Andrew Smith", role: "Project Manager"},
  {"id": 11, "username": "DrewBarontini", "name": "Drew Barontini", role: "Developer"},
  {"id": 12, "username": "JordanWade", "name": "Jordan Wade", role: "Developer"},
  {"id": 13, "username": "AlyssaNicoll", "name": "Alyssa Nicoll",role: "Project Manager"}
];

var User = require('../models/user');

module.exports = function(app){
  app.get('/users', function(req, res){
    res.json(User.all());
  });

  app.get('/users/:id', function(req, res){
    var userId = parseInt(req.params.id, 10);
    res.json(User.get(userId) || {});
  });
};
