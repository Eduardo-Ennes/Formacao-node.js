fefe = {
    nome: 'Fefe do mercadinho', 
    idade: 40,
    nacionalidade: 'Portuguesa'
}

var fefe2 = {
    nome: 'Fefe do hortifrut', 
    idade: 90,
    nacionalidade: 'Irlandesa'
} 

var fefe3 = {
    nome: 'Fefe do game', 
    idade: 65,
    nacionalidade: 'Russo'
}

var users = [fefe, fefe2, fefe3]

var usuario = users.find(user => user.nome == 'Fefe do mercadinho')
console.log(`
Nome: ${usuario.nome}
Idade: ${usuario.idade}
Nacionalidade: ${usuario.nacionalidade}
`)