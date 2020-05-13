const Sequelize = require('sequelize');
const sequelize = new Sequelize('livraria', 'root', 'yan020902', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;