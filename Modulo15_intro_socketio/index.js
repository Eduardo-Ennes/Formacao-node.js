var express = require('express')
var app = express() 

// Para trabalhar com o socket.io precisamos usar o servidor nativo do node.js
var http = require('http').createServer(app)

var io = require('socket.io')(http)

app.set('view engine', 'ejs')


io.on("connection", (socket) => {

    socket.on('disconnect', () => {
        console.log('X desconectou: ' + socket.id)
    })

    socket.on('teste', (data) => {
        console.log('teste:')
        console.log(data)
    })

    socket.on('palavra', (data) => {
        console.log(data)
        socket.emit('resultado', data + ' - Olá, mundo!')
    })
})


app.get('/', (req, res) => {
    res.render('index')
})


http.listen(8080, () => {
    console.log('Servidor rodando')
})