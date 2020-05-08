const controller = require('../base/baseController');
const Service = require('../base/baseService');

module.exports = app => {
    const service = new Service('autor');

    app.get('/autores', controller.findAll(service));
    app.get('/autores/:id', controller.findByPk(service));
    app.post('/autores', controller.create(service));
    app.put('/autores/:id', controller.update(service));
    app.delete('/autores/:id', controller.destroy(service));
};