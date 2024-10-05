var http = require('http')

http.createServer(function(requisicao, resposta){
    resposta.end('<h1>Hello, World</h1><p>Minha primeira requisicao</p>')
}).listen(3000)

console.log('Minha aplicação está funcionando')