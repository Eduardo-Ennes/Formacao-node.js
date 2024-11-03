const Sequelize = require("sequelize")
const Connection = require('../Database/database')

const Passages = Connection.define('passages', {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

// Passages.sync({force: true})

module.exports = Passages;