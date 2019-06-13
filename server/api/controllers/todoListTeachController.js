'use strict';


var mongoose = require('mongoose'),
Teach = mongoose.model('Teach');

exports.list_all_teach = function(req, res) {
  Teach.find({}, function(err,teach) {
    if (err)
      res.send(err);
    res.json(teach);
  });
};


exports.create_a_teach = function(req, res) {
  var new_task = new Teach(req.body);
  new_task.save(function(err, teach) {
    if (err)
      res.send(err);
    res.json(teach);
  });
};


exports.read_a_teach = function(req, res) {
  Teach.findById(req.params.teachId, function(err, teach) {
    if (err)
      res.send(err);
    res.json(teach);
  });
};


exports.update_a_teach = function(req, res) {
  Teach.findOneAndUpdate({_id: req.params.teachId}, req.body, {new: true}, function(err, teach) {
    if (err)
      res.send(err);
    res.json(teach);
  });
};

exports.delete_a_teach = function(req, res) {


    Teach.remove({
      _id: req.params.teachId
    }, function(err, teach) {
      if (err)
        res.send(err);
      res.json({ message: 'teach successfully deleted' });
    });
};