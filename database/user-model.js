const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:String,
    last_name:String,
    location:String
});

module.exports = mongoose.model('User',userSchema);