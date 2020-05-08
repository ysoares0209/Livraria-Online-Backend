const controller = require('../base/baseController');
const Service = require('../base/baseService');

module.exports = app => {
    const service = new Service('editora');

    app.get('/editoras', controller.findAll(service));
    app.get('/editoras/:id', controller.findByPk(service));
    app.post('/editoras', controller.create(service));
    app.put('/editoras/:id', controller.update(service));
    app.delete('/editoras/:id', controller.destroy(service));
}