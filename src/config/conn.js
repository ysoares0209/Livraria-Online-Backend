const Sequelize = require('sequelize');
const sequelize = new Sequelize('livraria', 'root', 'fb0733', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;