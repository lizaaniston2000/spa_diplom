'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    event_name:String,
    src: String,
    event_date: String
})

module.exports = mongoose.model('Event', EventSchema);