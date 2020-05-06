exports.findAll = service => async (req, resp) => {
    await service.findAll()
        .then(result => {
            return resp.json(result);
        })
        .catch(err => {
            return resp.send(err);
        })
},

exports.findByPk = service => async (req, resp) => {
    const { id } = req.params;
    await service.findByPk(id)
        .then(result => {
            return resp.json(result);
        })
        .catch(err => {
            return resp.send(err);
        })
},

exports.create = service => async(req, resp) => {
    await service.create(req.body)
        .then(() => {
            return resp.status(201).send();
        })
        .catch(err => {
            return resp.send(err); 
        })
},

exports.update = service => async(req, resp) => {
    const { id } = req.params;
    await service.update(req.body, 
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

exports.destroy = service => async (req, resp) => {
    const { id } = req.params;
    await service.destroy({
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
