const mongoose = require('mongoose');

let contestSchema = new mongoose.Schema({
    id:Number,
    name:String,
    description:String
});

module.exports = mongoose.model('Contest',contestSchema);