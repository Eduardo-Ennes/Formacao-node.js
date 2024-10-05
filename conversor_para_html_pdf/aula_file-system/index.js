const fs = require('fs')
/* file-system = sistema de arquivo */


// function modificarconteudo(nome, planeta, elemento){
//     fs.readFile("./usuario.json", {encoding: 'utf-8'}, (error, dados) => {
//         if(error){
//             console.log('Um error aconteceu ao ler os dados.')
//         }
//         else{
//             var conteudo = JSON.parse(dados)
//             /* JSON.parse() -> converte objeto json para javascript */
//             conteudo.nome = nome
//             conteudo.planeta = planeta
//             conteudo.elemento = elemento
    
//             fs.writeFile('./usuario.json', JSON.stringify(conteudo), (error) => {
//                 /* JSON.stringify() -> conerte objeto javascript para json */
//                 if(error){
//                     console.log("Houve um error na leitura dos dados.")
//                 }
//             })
//         }
//     })
// }


// modificarconteudo('Fefe alienigena', 'Marte', 'Terra')




// EXEMPLOS DE COMO LER E ESCREVER TEXTOS

// Aqui para salvar os dados que escremos aqui no texto
fs.writeFile("./texto.txt", 'nome: Fefe Astronauta', (error) => {
    if(error){
        console.log("Erro no salvamento dos textos...")
    }
}) 





// Como se fosse um conversor para vermos textos 
// fs.readFile("./texto.txt",{encoding: 'utf-8'} ,(error, dados) => {
//     if(error){
//         console.log(error)
//         console.log('Erro na leitura dos dados.')
//     }
//     else{
//         console.log(dados)
//     }
// }) 