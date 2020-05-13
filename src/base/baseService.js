class baseService {

    constructor(model) {
        this.path = '../' + model + '/model';
        this.model = require(this.path);
    }

    async findAll(page) {
        let limit = 5;
        let offset = 0;
        let count = await this.model.count();
        let pages = Math.ceil(count / limit);
        offset = limit * (page - 1);
        return await this.model.findAll({
                    include: [{all: true, nested: true}],
                    limit: limit,
                    offset: offset,
                    order: ['nome']
                })
    };

    async findByPk(id) {
        return this.model.findByPk(id)
    };

    async create(data) {
        return this.model.create(data)
    };

    async update(data, id) {
        if (data && id) {
            return this.model.update(data, {
                where: { id: id },
                returning: true
            });
        }
    };

    async destroy(id) {
        if (id) {
            try {
                this.model.destroy({where: {id: id}})
                return true;
            }
            catch(err) {
                return false;
            }
        }
    }
}

module.exports = baseService;


