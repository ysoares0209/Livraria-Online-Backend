const uuidv1 = require('uuid/v1');

class baseService {

    constructor(model) {
        this.path = '../' + model + '/model';
        this.model = require(this.path);
        this.includeValues = '';
    }

    async findAll() {
            let list = await this.model.findAll({include:[{association:this.includeValues}]}
            );
            return list;
    };

    async findOne(id) {
        return this.model.findByPk(id)
    };

    async create(data) {
        data.id = uuidv1();
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
                this.modelObject = await findOne(id);
                this.modelObject.destroy();
                return 'OK';
            } catch (err) {
                return false;
            }
        }
    };
}

module.exports = baseService;


