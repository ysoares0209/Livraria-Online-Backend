exports.findAll = model => async (req, resp) => {
    await model.findAll()
        .then(result => {
            return resp.json(result);
        })
        .catch(err => {
            return resp.send(err);
        })
},

exports.findByPk = model => async (req, resp) => {
    const { id } = req.params;
    await model.findByPk(id)
        .then(result => {
            return resp.json(result);
        })
        .catch(err => {
            return resp.send(err);
        })
},

exports.create = model => async(req, resp) => {
    await model.create(req.body)
        .then(() => {
            return resp.status(201).send();
        })
        .catch(err => {
            return resp.send(err); 
        })
},

exports.update = model => async(req, resp) => {
    const { id } = req.params;
    const body = req.body;
    await model.update({
        nome: body.nome,
        titulo: body.titulo,
        descricao: body.descricao,
        preco: body.preco,
        publicacao: body.publicacao
    }, 
    {
        where: {
            id: id
        }
    })
    .then(() => {
        resp.status(200).send();
    })
    .catch(err => {
        resp.status(500).send(err);
    }) 
},

exports.destroy = model => async (req, resp) => {
    const { id } = req.params;
    await model.destroy({
        where: {
            id: id
        }
    })
    .then( () => {
        return resp.status(204).send();
    })
    .catch( err => {
        return resp.send(err);
    })
}
