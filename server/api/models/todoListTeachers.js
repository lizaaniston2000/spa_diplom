'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeachSchema = new Schema({
    ped_name:String,
    src: String,
    ped_d: String,
    ped_info:String
})

module.exports = mongoose.model('Teach', TeachSchema);