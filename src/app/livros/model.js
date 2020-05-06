const { DataTypes } = require('sequelize');
const conn = require('../../config/conn');
const Autor = require('../autor/model');
const Editora = require('../editora/model');
const Genero = require('../genero/model');

const Livro = conn.define('livros', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false
    },
    autorId: {
        type: DataTypes.UUID,
    },
    editoraId: {
        type: DataTypes.UUID,
    },
    generoId: {
        type: DataTypes.UUID,
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
    publicacao: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { tableName: "livros" });

Livro.belongsTo(Autor, {foreignKey: 'autorId', sourceKey: Autor.id, as: 'autor' });
Livro.belongsTo(Editora, {foreignKey: 'editoraId', sourceKey: Editora.id });
Livro.belongsTo(Genero, {foreignKey: 'generoId', sourceKey: Genero.id });


module.exports = Livro;