const controller = require('../base/controller');
const model = require('./model');

module.exports = app => {
    app.get('/autores', controller.findAll(model));
    app.get('/autores/:id', controller.findByPk(model));
    app.post('/autores', controller.create(model));
    app.put('/autores/:id', controller.update(model));
    app.delete('/autores/:id', controller.destroy(model));
};