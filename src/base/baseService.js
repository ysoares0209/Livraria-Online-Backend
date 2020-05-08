class baseService {

    constructor(model) {
        this.path = '../' + model + '/model';
        this.model = require(this.path);
    }
    async findAll() {
            let list = await this.model.findAll({include: [{all: true, nested: true}]});
            return list;
    };

    async findByPk(id) {
        return this.model.findByPk(id)
    };

    async create(data) {
        //data.id = uuidv1();
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


