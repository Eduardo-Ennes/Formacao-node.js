var express = require('express')
var app = express()
var mongoose = require('mongoose')
var user = require('../models/user')
var vali = require('../validations/validate')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/aprendendoMongo").then(res => {
    
}).catch(err => {
    console.log(err)
})

var User = mongoose.model("User", user)

app.get("/", (req, res) => {
    res.send('Olá, mundo!')
})

app.post('/user', async (req, res) => {
    var name = validation.validateString(req.body.name)
    console.log(name)
    var email = validation.validateString(req.body.email)
    console.log(email)
    var password = validation.validateString(req.body.password)
    console.log(password)
    if(name == true && email == true && password == true){
        var valiemail = await validation.validateEmail(email)
        if(valiemail == true){
            try{
                var newUser = new User({name: name, email: email, password: password})
                await newUser.save()
                res.json({email: req.body.email})
            }catch(err){
                res.sendStatus(400)
            }
        }
        else{
            res.sendStatus(400)
        }
    }
    else{
        res.sendStatus(400)
    }
})


module.exports = app;