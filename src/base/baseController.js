exports.findAll = service => async (req, resp) => {
    console.log(req);
    await service.findAll(1)
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
        .then(result => {
            return resp.status(201).send(result);
        })
        .catch(err => {
            return resp.send(err); 
        })
},

exports.update = service => async(req, resp) => {
    const { id } = req.params;
    await service.update(req.body, id)
        .then(() => {
            return resp.status(204).send();
        })
        .catch(err => {
            return resp.status(500).send(err);
        })
},

exports.destroy = service => async (req, resp) => {
    const { id } = req.params;
    let result = await service.destroy(id);
    if (result) {
       return resp.status(204).send();
    }
    return resp.status(500).send();
}
