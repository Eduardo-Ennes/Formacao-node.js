const Reader = require("./Reader")
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParse = require('./HtmlParse')
const Write = require('./Write')
const pdf = require("./PDFWrite")

const leitor = new Reader()
var escritor = new Write()

// Função principal do programa, aqui é a pagina que faz tudo acontecer, importamos tudo para que funcione aqui.
async function main() {
    // Primeiro: transformamos o arquivo em hexadecimal para texto e depois para string para que possamos trabalhar com os dados, ver no Reader.js
    var dados = await leitor.Read("./teste.csv")

    // Segundo: dividimos as strings e as colocamos em arrays, ver em Processor.js
    var list = Processor.process(dados)

    // Terceiro: divimos as tabelas e colocamos dentro de variaveis para dividi-las apenas, ver em Table.js
    var grade = new Table(list)

    // Quarto: Criamos um arquivo ejs para servir como satelite, criamos o html no ejs e organizamos todo os scripts la, O conteudo que contem no ejs que sera usado quando criarmosum novo html e pdf
    var html = await HtmlParse.Parse(grade)
    
    // ------------------------------------------------
    // Criador do html puro
    escritor.Write(Date.now() + '.html', html)
    // Criador do pdf 
    pdf.WritePDF(Date.now() + '.PDF', html)
    // ------------------------------------------------
}

main()