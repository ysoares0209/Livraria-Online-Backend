const { DataTypes } = require('sequelize');
const conn = require('../../config/conn');
const Livro = require('../livros/model');

const Genero = conn.define('genero', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { tableName: "genero" });

module.exports = Genero;