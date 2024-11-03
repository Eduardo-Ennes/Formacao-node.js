var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const appo = require('./services/appointmentService')
const appoFac = require('./factories/AppointmentFactory')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"));


app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/aprendendoMongo')
/* Daqui para cima são as configurações */

/* Aplicação */
app.get('/', async (req, res) => {
    res.render('index')
})


app.get('/cadastro', (req, res) => {
    res.render('create')
})


app.post('/create', async (req, res) => {
    var {name, email, description, date, time} = req.body
    if(name != undefined && name != '' && name != ' ' && email != undefined && email != '' && email != ' ' && description != undefined && description != '' && description != ' ' && date != undefined && date != '' && date != ' ' && time != undefined && time != '' && time != ' '){
        var conferDate = appoFac.ConferenceDate({date, time})
        if(conferDate.status){
            var result = await appo.create(name, email, description, date, time)
            if(result.status){
                res.status(200)
                res.redirect('/')
            }
            else{
                res.status(406)
                res.send(result.err)
            }
        }
        else{
            res.status(406)
            res.send(conferDate.err)
        }   
    }
    else{
        res.status(406)
        res.send('Todos os campos devem ser obrigatoriamente preenchidos.')
    }
})


app.get('/information/:id', async (req, res) => {
    var id = req.params.id
    if(id != undefined && id != '' && id != ' '){
        var result = await appo.getFindById(id)
        if(result.status){
            res.status(200)
            res.render('appointment', {user: result.user})
        }
        else{
            res.status(406)
            res.send(result.err)
        }
    }
    else{
        res.status(406)
        res.send(id.err)
    }
})


app.get('/getcalendar', async (req, res) => {
    var appointment = await appo.getAll(false)
    res.json(appointment.result)
})


app.post('/finished/:id', async (req, res) => {
    var id = req.params.id
    if(id != undefined && id != '' && id != ' '){
        var user = await appo.getFindById(id)
        if(user.status){
            var finished = await appo.UpdateFinished(id)
            if(finished.status){
                res.status(200)
                res.redirect('/')
            }
            else{
                res.status(406)
                res.send(finished.err)
            }
        }
        else{
            res.status(user.status)
            res.send(res.err)
        }
    }
    else{
        res.status(406)
        res.send('Houve um error ao encontrar o usuário no banco de dados.')
    }
})


app.get('/list', async (req, res) => {
    var listUsers = await appo.getAllOf()
    if(listUsers.status){
        res.status(200)
        res.render('list', {users: listUsers.certo})
    }
    else{
        res.status(406)
        res.send(listUsers.err)
    }
})


app.get('/search', async (req, res) => {
    var data = req.query.search
    if(data != undefined && data != '' && data != ' '){
        var user = await appo.Search(data)
        if(user.status){
            res.status(200)
            res.render('listUser', {users: user.certo})
        }
        else{
            res.status(406)
            res.redirect('/list')
        }
    }
    else{
        res.status(406)
        res.send('O campo de pesquisa não pode ser vazio.')
    }
})


var pollTime = 5000

setInterval(async () => {
    var appos = await appo.notification()
    console.log(appos)
}, pollTime)



app.listen(8080, () => {
    console.log('servidor rodando...')
})