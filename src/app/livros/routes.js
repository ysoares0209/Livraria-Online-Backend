const controller = require('../base/controller');
const model = require('./model');

module.exports = app => {
    app.get('/livros', controller.findAll(model));
    app.get('/livros/:id', controller.findByPk(model));
    app.post('/livros', controller.create(model));
    app.put('/livros/:id', controller.update(model));
    app.delete('/livros/:id', controller.destroy(model));
}