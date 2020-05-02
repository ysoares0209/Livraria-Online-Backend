const livroController = require('./controllers/livro');

module.exports = (app) => {
    
    app.get('/livros', livroController.findAll);
    app.get('/livros/:id', livroController.findOne);
    app.post('/livros', livroController.insert);
    app.put('/livros/:id', livroController.update);
    app.delete('/livros/:id', livroController.destroy);
}