const livro = require('../models/livro');

module.exports = {

    async FindAll (req, resp) {
        const result = await livro.findAll();
        resp.send(result);
    },

    async FindOne (req, resp) {
        const { id } = req.params;
        const result = await livro.findAll({
            where: {
                id: id
            }
        })
        resp.send(result);
    },

    async Insert (req, resp) {
        await livro.create(req.body);
        return resp.send('Ok, o registro foi incluído.')
    },

    async Update (req, resp) {
        const { id } = req.params;
        const { body } = req.body;
        await livro.update(body, {
            where: {
                id: id
            }
        });
        return resp.send('Registro atualizado com sucesso');
    },

    async Destroy (req, resp) {
        const { id } = req.params;
        await livro.destroy({
            where: {
                id: id
            }
        })
        return resp.send('registro deletado')
    }
}