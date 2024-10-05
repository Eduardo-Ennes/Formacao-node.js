const sequelize = require('sequelize')

const connection = new sequelize('perguntas_e_respostas', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection