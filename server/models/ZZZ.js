const mongoose = require('mongoose')

const ZZZSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

module.exports = mongoose.model("ZZZ", ZZZSchema);
