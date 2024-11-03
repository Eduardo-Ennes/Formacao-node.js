/* configurações do express */
const express = require('express')
const app = express()

/* configuração do ejs */
app.set('view engine', 'ejs')

/* configuração dos arquivos staticos */
app.use(express.static('public')) // para arquivos staticos

/* configurações do body-parse */
const bodyParse = require('body-parser')
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

/* Database */
const connection = require('./database/database')
const pergunta = require('./database/Pergunta')

/* database */
const resposta = require('./database/Resposta')
const { where } = require('sequelize')

// ----------------------------------------------------------------------------------------


/* Conexão com banco de dados */ 
connection.authenticate().then(()=>{
    console.log('Conexão feita com o banco de dados')
}).catch((msgErro)=>{
    console.log(msgErro)
})
// then() -> caso positivo podemos mostrar uma mensagem 
// catch() -> caso negativo podemos mostrar uma mensagem de erro
// then() e catch() podem servir para teste, caso uma conexão deu certo ou não


/* Rotas */
app.get('/',function(req, res){
    pergunta.findAll({raw: true, order:[['id', 'DESC']]}).then(perguntas =>{
        res.render('index', {
            perguntas: perguntas
        })
    })
})

app.get('/perguntar', function(req, res){
    res.render('perguntar')
})

app.post('/salvarpergunta', function(req, res){
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect('/')
    })
})

app.get('/pergunta/:id', function(req, res){
    var id = req.params.id
    pergunta.findOne({
        where: {id: id}
    }).then(pergunta=>{
        if (pergunta != undefined){
            resposta.findAll({
                where:{perguntaId: pergunta.id},
                order:[['id', 'DESC']]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        }else{
            res.redirect('/')
        }
    })
})

app.post('/responder', function(req, res){
    var corpo = req.body.corpo
    var perguntaID = req.body.perguntaID
    resposta.create({
        corpo: corpo,
        perguntaId: perguntaID
    }).then(()=>{
        res.redirect('/pergunta/'+perguntaID)
    })
})


app.listen(4000, function(erro){
    if(erro){
        console.log('Ocorreu um erro')
    }else{
        console.log("Aplicação ativa!")
    }
})