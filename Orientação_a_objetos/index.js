class filme {
    // Atributos
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }

    // Metodos
    Reproduzir(){
        console.log("Reproduzindo...")
    }

    Pausar(){
        console.log("Pausando...")
    }

    Avançar(){
        console.log('Avançando...')
    }

    Fechar(){
        console.log('Fechando...')
    }

    Informacoes(){
        console.log(`
            Nome do filme: ${this.titulo}
            Ano de lançamento: ${this.ano}
            Gênero: ${this.genero}
            Diretor: ${this.diretor}
            Tempo de duração: ${this.duracao}
        `)
    }
}
'starWars'
var starWars = new filme('starWars', 1960, 'Ficção', 'Fefe do mercadinho', '3 horas')
starWars.Informacoes()
console.log(starWars.titulo)
