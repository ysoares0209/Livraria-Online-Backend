const Livro = require('../models/Livro');

module.exports = {

    async FindAll (req, resp) {
        const result = await Livro.findAll();
        if (!result) {
            resp.status(200).json('Não foi encontrado nenhum registro');
        }
        return resp.status(200).json(result);
    },

    async FindOne (req, resp) {
        const { id } = req.params;
        const result = await Livro.findAll({
            where: {
                id: id
            }
        });
        if (!result) {
            return resp.send(200).json('O registro procurado não foi encontrado');
        }
        return resp.send(result);
    },

    async Insert (req, resp) {
        await Livro.create(req.body);
        return resp.status(201).json('Registro incluído com sucesso');
    },

    async Update (req, resp) {
        const { id } = req.params;
        const data = req.body;
        await Livro.update({
            titulo: data.titulo,
            descricao: data.descricao,
            preco: data.preco,
            autor: data.autor,
            publicacao: data.publicacao,
            editora: data.editora
        }, {
            where: {
                id: id
            }
        })
        resp.send('ok');
    },
    
    async Destroy (req, resp) {
        const { id } = req.params;
        await Livro.destroy({
            where: {
                id: id
            }
        })
        return resp.status(204).json('Registro deletado com sucesso');
    }
}