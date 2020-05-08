const controller = require('../base/baseController');
const Service = require('../base/baseService')

module.exports = app => {
    const service = new Service('livros');
    //service.includeValues=['autor', 'editora', 'genero'];
    
    app.get('/livros', controller.findAll(service));
    app.get('/livros/:id', controller.findByPk(service));
    app.post('/livros', controller.create(service));
    app.put('/livros/:id', controller.update(service));
    app.delete('/livros/:id', controller.destroy(service));
}