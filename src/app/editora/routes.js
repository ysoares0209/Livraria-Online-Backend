const controller = require('../base/controller');
const model = require('./model');

module.exports = app => {
    app.get('/editoras', controller.findAll(model));
    app.get('/editoras/:id', controller.findByPk(model));
    app.post('/editoras', controller.create(model));
    app.put('/editoras/:id', controller.update(model));
    app.delete('/editoras/:id', controller.destroy(model));
}