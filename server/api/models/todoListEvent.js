'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    event_name: String,
    src:String,
    event_date: { type: Date, default: Date.now }  
})

module.exports = mongoose.model('Event', EventSchema);