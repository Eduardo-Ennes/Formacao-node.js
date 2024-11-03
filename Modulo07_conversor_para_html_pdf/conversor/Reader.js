/* Arquivo "csv" são dados separados por virgulas, cada coluna do excel corresponde a uma virgula e cada linha corresponde uma linha 

fs.readFile -> Le o arquivo que vem e hexadecimal e o transforma em texto

ultil.promisify -> transforma esse textos em string
*/ 
const fs = require("fs") // função para ler e escrever 
const util = require('util') // função para transformamos o documento em string ou promise 

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile)
    }
    async Read(filepath){
        try{
            return await this.reader(filepath, 'utf8')
        }
        catch{
            return undefined
        }
    }
}

module.exports = Reader;