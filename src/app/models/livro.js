const { DataTypes } = require('sequelize');
const conn = require('../../config/conn');

const Livro = conn.define('livros', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.FLOAT
    },
    autor: {
        type: DataTypes.STRING
    },
    publicacao: {
        type: DataTypes.DATE
    },
    editora: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, { freezeTableName: true });

module.exports = Livro;