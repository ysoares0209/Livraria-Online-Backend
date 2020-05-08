const controller = require('../base/baseController');
const Service = require('../base/baseService');

module.exports = app => {
    const service = new Service('genero');

    app.get('/generos', controller.findAll(service));
    app.get('/generos/:id', controller.findByPk(service));
    app.post('/generos', controller.create(service));
    app.put('/generos/:id', controller.update(service));
    app.delete('/generos/:id', controller.destroy(service));
}