exports.findAll = service => async (req, resp) => {
    try {
        let page=1;
        if (req.query && req.query.page) { 
            page=parseInt(req.query.page, 10);
        } 
        
        let data = await service.findAll(page);
        if (data) {
            return resp.json(data);
        }
    } catch (err) {
        return resp.json(err);
    }
},

exports.findByPk = service => async (req, resp) => {
    try {
        const { id } = req.params;
        let data = await service.findByPk(id);
        if (data) {
            return resp.json(data);
        }
    } catch (err) { return resp.json(err); }
},

exports.create = service => async(req, resp) => {
    try {
        let data = await service.create(req.body);
        if (data) {
            return resp.json(data);
        }
    } catch (err) { return resp.json(err); }
},

exports.update = service => async(req, resp) => {
    try {
        const { id } = req.params;
        let data = await service.update(req.body, id)
        if (data) {
            return resp.status(204).send();
        }
    } catch (err) { return resp.json(err); }
},

exports.destroy = service => async (req, resp) => {
    try {
        const { id } = req.params;
        let result = await service.destroy(id);
        if (result) {
            return resp.status(204).send();
        }
    } catch (err) { return resp.status(500).send(); }
}
