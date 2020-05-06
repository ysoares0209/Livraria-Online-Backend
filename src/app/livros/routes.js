const controller = require('../base/controller');
const Service = require('../base/base_service')

module.exports = app => {
    const service = new Service('livros');
    service.includeValues='autor';
    
    app.get('/livros', controller.findAll(service));
    app.get('/livros/:id', controller.findByPk(service));
    app.post('/livros', controller.create(service));
    app.put('/livros/:id', controller.update(service));
    app.delete('/livros/:id', controller.destroy(service));
}