class Leitor{
    ler(){
        console.log('Lendo conteudo.')
    }
}

class Escritor{
    escrever(arquivo, conteudo){
        console.log('Conteudo escrito.')
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado.")
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Arquivo deletado.")
    }
}

class ManipuladorDeArquivos{
    constructor(nome){
        this.arwuivo = nome
        this.leitor = new Leitor()
        this.escritor = new Escritor()
        this.criador = new Criador()
        this.destruidor = new Destruidor()
    }
}

var manipulador = new ManipuladorDeArquivos('arquivo.pdf')

manipulador.leitor.ler()
manipulador.escritor.escrever()
manipulador.criador.Criar()
manipulador.destruidor.Deletar()