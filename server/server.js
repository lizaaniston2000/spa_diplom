  var express = require('express'),
  CONNECTION_URI=process.env.MONGOLAB_COPPER_URI||'mongodb://localhost:27017/yubik';
  port = process.env.PORT || 5000;
  const mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  Event = require('./api/models/todoListEvent'),
  Teach = require('./api/models/todoListTeachers'),
  bodyParser = require('body-parser');
  const app=express();

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
  
  mongoose.Promise = global.Promise;
  mongoose.connect(CONNECTION_URI, {useNewUrlParser: true});
  //mongoose.connect('mongodb://localhost:27017/yubik', {useNewUrlParser: true });
  //mongoose.connect('mongodb+srv://liza_aniston:sail2000@cluster0-7wq7s.mongodb.net/yubik?retryWrites=true', {useNewUrlParser: true });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  

  var routes = require('./api/routes/todoListRoutes'); //importing route
  app.use('/api', routes);
  
  app.listen(port);
  
  console.log('todo list RESTful API server started on: ' + port);
  
