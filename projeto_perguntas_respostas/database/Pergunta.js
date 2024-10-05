const Sequelize = require('sequelize')
const connection = require('./database')

/* Criação das tabelas */
const pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING, // strin para textos pequenos 
        allowNull: false // Não permite que o campo tenha um valor null
    },
    descricao:{
        type: Sequelize.TEXT, // text para textos grandes
        allowNull: false // Não permite que o campo tenha um valor null
    }
})

// Sincronização das tabelas criadas com o banco de dados 
pergunta.sync({force: false}).then(()=>{
    console.log('Tabela criada!')
}).catch((msgError)=>{
    console.log(msgError)
})
// Sincroniza no banco de dados 
// force: false --> caso a tabela já exista no banco de dados, não criará novamente 
// Then() -> se a conexão de certo podemos mostrar uma mensagem de conexão
// catch() -> se a conexão der errado mostramos uma mensagem de error  

module.exports = pergunta