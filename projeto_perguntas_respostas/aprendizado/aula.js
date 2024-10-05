// ficar como historico de aprendizado

// const express = require('express')
// const app = express()
// app.set('view engine', 'ejs')
// app.use(express.static('public')) // para arquivos staticos


app.get('/:nome/:prof',function(req, res){
    var nome = req.params.nome
    var prof = req.params.prof
    var exibirmsg = true
    var paises = [
        {pais: 'Portugal', cont: 'Europa'},
        {pais: 'Russia', cont: 'Inter-continental'},
        {pais: 'Egito', cont: 'Africa'},
        {pais: 'Austria', cont: 'Europa'},
        {pais: 'Australia', cont: 'Oceania'},
        {pais: 'Coreia do sul', cont: 'Asia'},
    ]
    res.render('index', {
        nome: nome,
        empresa: 'mercadinho do fefe',
        profissao: prof,
        exibir: exibirmsg,
        paises: paises
    })
})

// app.listen(4000, function(erro){
//     if(erro){
//         console.log('Ocorreu um erro')
//     }else{
//         console.log("Aplicação ativa!")
//     }
// })