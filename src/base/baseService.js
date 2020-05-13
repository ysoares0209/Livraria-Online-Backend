class baseService {

    constructor(model) {
        this.path = '../' + model + '/model';
        this.model = require(this.path);
    }

    async findAll(page) {
        let limit = 5;
        let offset = 0;
        await this.model.findAndCountAll()
            .then(query => {
                let pages = Math.ceil(query.count / limit);
                offset = limit * (page - 1);
                this.model.findAll({
                    include: [{all: true, nested: true}],
                    limit: limit,
                    offset: offset
                }).then(result => {
                        //console.log(result);
                    })
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


