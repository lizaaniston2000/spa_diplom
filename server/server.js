var express = require('express'),
 port = process.env.PORT || 3000;
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
  mongoose.connect('mongodb://localhost:27017/yubik', {useNewUrlParser: true });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  

  var routes = require('./api/routes/todoListRoutes'); //importing route
  app.use('/api', routes);
  
  app.listen(port);
  
  console.log('todo list RESTful API server started on: ' + port);
  
