const mongoose = require('mongoose')

const ZZZSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const ZZZModel = mongoose.model("zzz", ZZZSchema)

module.exports = ZZZModel