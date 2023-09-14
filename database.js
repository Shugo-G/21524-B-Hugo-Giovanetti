const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('proyectofinal', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {sequelize}
