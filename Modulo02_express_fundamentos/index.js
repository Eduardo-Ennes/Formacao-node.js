const express = require('express') // Importanto o express
const app = express() // Inicializando o express

app.get("/", function(req, res) {
    // req -> dados enviados pelo usuario
    // res -> resposta que será enviada pelo usuario
    res.send("<h3>Olá, Mundo!</h3>")
})

app.get("/blog/:artigo?", function(req, res){ 
    // Esses paramentros são fixos na rota 
    var artigo = req.params.artigo
    if(artigo){
        res.send('Artigo: ' + artigo)
    }
    else{
        res.send('Bem vindo á pagina do blog')
    }
    
})

app.get("/canal/:nome/:empresa", function(req, res){
    var fefe = req.params.nome
    var fefe2 = req.params.empresa
    res.send('<h2>Olá, ' + fefe + ' do ' + fefe2 + '</h2>')
})

app.get("/pais", function(req, res){
    var pais = req.query['destino']
    if (pais){
        res.send(pais)
    }
    else{
        res.send('Nenhum destino fornecido')
    }
    
})





app.listen(4000, function(erro){
    if(erro){
        console.log('Ocorreu um erro!')
    }
    else{
        console.log('Servidor iniciado com sucesso!')
    }
})
