var express = require('express'),
 port = process.env.PORT || 3000;
  const mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  Event = require('./api/models/todoListEvent'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/yubik', {useNewUrlParser: true });
  
  const app=express();

  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  var routes = require('./api/routes/todoListRoutes'); //importing route
  app.use('/api', routes);
  
  app.listen(port);
  
  console.log('todo list RESTful API server started on: ' + port);
  
