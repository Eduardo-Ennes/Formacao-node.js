const Sequelize = require("sequelize")
const Connection = new Sequelize('passages', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = Connection