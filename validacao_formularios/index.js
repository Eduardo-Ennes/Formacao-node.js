const express = require('express')
var bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash') 
var cookieParser = require("cookie-parser");

// EXPRESS
const app = express()

// EXPRESS-SESSION
app.use(cookieParser("jsaddsh"));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

// EJS
app.set('view endine', 'ejs')

// BODY-PARSE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// EXPRESS-FLASH
app.use(flash())
/*-------------------------------------------------------------------------------------*/


app.get('/', (req, res) => {

    var emailError = req.flash('emailError')
    var nomeError = req.flash('nomeError')
    var pontosError = req.flash('pontosError')

    if(emailError != undefined){
        if(emailError.length == 0){
            emailError = undefined
        }
    }

    res.render('index.ejs', {emailError, nomeError, pontosError})
})

app.post('/form/arr', (req, res) => {
    var {email, nome, pontos} = req.body;
    var emailError;
    var nomeError;
    var pontosError;

    if(email == "" || email == undefined){
        emailError = 'O e-mail não pode ser vazio.'
        console.log(emailError)
    }
    if(pontos == undefined || pontos < 20){
        pontosError = 'Você não pode ter menos de 20 pontos.'
        console.log(pontosError)
    }
    if(nome == undefined || nome == ""){
        nomeError = 'O nome não pode ser vazio.'
        console.log(nomeError)
    }

    if(emailError != undefined || nomeError != undefined || pontosError != undefined){
        req.flash('emailError', emailError)
        req.flash('nomelError', nomeError)
        req.flash('pontosError', pontosError)
        res.redirect('/')
    }
    else{
        res.send('Show de bola esse form.')
    }
})




// INICIALIZAÇÃO DO PROJETO
app.listen(8080, (req, res) => {
    console.log("Servidor Rodando!")
})