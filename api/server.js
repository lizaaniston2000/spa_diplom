const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const myNews = require('./api/models/todoListModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/yubik');

const app=express();
const port=process.env.PORT||3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); 


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


