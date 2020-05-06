const controller = require('../base/controller');
const model = require('./model');

module.exports = app => {
    app.get('/generos', controller.findAll(model));
    app.get('/generos/:id', controller.findByPk(model));
    app.post('/generos', controller.create(model));
    app.put('/generos/:id', controller.update(model));
    app.delete('/generos/:id', controller.destroy(model));
}