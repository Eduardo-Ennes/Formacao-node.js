// configuração de conexão com o mongoDB
const mongoose = require('mongoose')
const articleModel = require('./article')
mongoose.connect("mongodb://localhost:27017/aprendendoMongo")
const Article = mongoose.model('Article', articleModel)

// Parte de inserção de dados
// const artigo = new Article({
//     title: "Fefe StarWars",
//     author: 'Fefe do mercadinho',
//     body: 'Estou em uma galaxia muito distante. Encontrei vida inteligente e muito avançada!'
// })
// artigo.save().then(res => {
//     console.log('Dados salvos com sucesso.')
// }).catch(err => {
//     console.log('Houve um erro ao salvar os dados.')
// })


//Seleção de dados
// Article.find({'author': 'Fefe do mercadinho'}).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// Deleção de dados
// Article.findByIdAndDelete("66fc4ed675bdfbbb2b178f56").then(res => {
//     console.log('Deletado com sucesso')
// }).catch(err => {
//     console.log(err)
// })


// Atualizar dados
Article.findByIdAndUpdate('66fc4f91e3095d6b39991581', {
    body: 'Eu viajei para outra galaxia através de um buraco negro. Rdical! Estou perdido.'
}).then(res => {
    console.log('Atualizado com sucesso')
}).catch(err => {
    console.log(err)
})


Article.find({'author': 'Fefe do mercadinho'}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})