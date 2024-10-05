const express = require("express")
const app = express()
const bodyParse = require('body-parser')
const Connection = require('./Database/database')
const Passages = require('./passages/passages')
const cors = require('cors')


app.use(cors())

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))


Connection.authenticate().then(() => {
    console.log("CONEXÃO COM O BANCO DE DADOS FEITA COM SUCESSO!")
}).catch(() => {
    console.log("HOUVE ALGUM PROBLEMA COM A CONEXÃO COM O BANCO DE DADOS!")
})



// Renderiza a listagem de destinos 
app.get('/passages', (req, res) => {
    Passages.findAll({order: [['id', 'DESC']]}).then(passages => {
        res.render('index', {passages:passages})
        res.statusCode = 200
    })
})

// Da aula de api
app.get('/passage/:id', (req, res) => {
    var id = req.params.id
    if(isNaN(id)){
        res.sendStatus(400)
    }
    else{
        var num = parseInt(id)
        var passage = DB.passages.find(p => p.id == num)
        if(passage != undefined){
            res.statusCode = 200
            res.json(passage)
        }
        else{
            res.sendStatus(404)
        }
    }
})


// Renderiza a pagina de criação de destinos
app.get('/passage', (req, res) => {
    res.statusCode = 200
    res.render('create')
})


// Salva informações no banco de dados
app.post('/passage', (req, res) => {
    var country = req.body.country
    var city = req.body.city
    var company = req.body.company
    var price = req.body.price
    if(isNaN(price)){
        res.statusCode = 400
        res.redirect('/passages')
    }
    else{
        var PrinceNum = parseFloat(price)
        Passages.create({
            country: country,
            city: city,
            company: company,
            price: PrinceNum
        })
        res.statusCode = 200
        res.redirect('/passages')
    }
})


// Deleta informações do banco de dados
// app.delete 
app.post('/passage/delete/:id', (req, res) => {
    var id = req.params.id
    console.log(id)
    if(isNaN(id)){
        res.statusCode = 400
        res.redirect('/passages')
    }
    else{
        var num = parseInt(id)
        Passages.destroy({
            where: {id: num}
        }).then(() => {
            res.statusCode = 200
            res.redirect('/passages')
        })
    }
})


// Renderiza a pagina de atualização
app.get('/passage/up/:id', (req, res) => {
    var id = req.params.id
    if(isNaN(id)){
        res.redirect('/passages')
    }
    else{
        Passages.findByPk(id).then(passage => {
            res.render('edit', {passage: passage})
        })
    }
})


// app.put 
app.post('/passage/:id', (req, res) => {
    var id = req.params.id
    var country = req.body.country
    var city = req.body.city
    var company = req.body.company
    var price = req.body.price
    if(isNaN(id)){
        res.redirect('/passages')
        res.statusCode = 400
    }
    else{
        Passages.update({
            country: country,
            city: city, 
            company: company,
            price: price
        }, {
        where: {
            id:id
        }
        }).then(() => {
            res.statusCode = 200
            res.redirect('/passages')
        }).catch(error => {
            res.statusCode = 400
            res.redirect('/passages')
        })
    }
})


app.listen(8080, () => {
    console.log('API RODANDO...')
})