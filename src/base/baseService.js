class baseService {

    constructor(model) {
        this.path = '../' + model + '/model';
        this.model = require(this.path);
    }

    async findAll(page) {
        let limit = 5;
        let offset = 0;
        let data = await this.model.findAndCountAll();
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);
        return await this.model.findAll({
                    include: [{all: true, nested: true}],
                    limit: limit,
                    offset: offset
                })
        
        
        // await this.model.findAndCountAll()      
        // .then(query => {
        //     let pages = Math.ceil(query.count / limit);
        //     offset = limit * (page - 1);
        //     await this.model.findAll({
        //         include: [{all: true, nested: true}],
        //         limit: limit,
        //         offset: offset
        //     }).then(result => {
        //             return result;
        //         })
        // })
    
    };


    // async findAll(filter, page, items_per_page) {
    //     let offset = 0;
    //     offset = items_per_page * (page - 1);
    //     console.log()
    //     let data = await this.model.findAndCountAll();
    //     if (data) {
    //         let pages = Math.ceil(data.count / items_per_page);
    //         let list = await this.model.findAll({
    //             where: filter,
    //             limit: items_per_page,
    //             offset: offset,
    //             include:[{association:this.includeValues}]
    //         });
    //         list.page_count = pages;
    //         list.items_count = data.count;
    //         list.page = page;
    //         list.items_per_page = items_per_page;
    //         return list;
    //     }
    // };    

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


