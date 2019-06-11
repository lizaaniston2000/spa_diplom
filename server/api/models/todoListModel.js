'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    news_name: String,
    news_item: String,
    src:String    
})

module.exports = mongoose.model('News', TaskSchema);