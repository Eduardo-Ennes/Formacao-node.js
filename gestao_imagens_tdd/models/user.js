var mongoose = require('mongoose')
const { name } = require('../src/app')

var User = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = User