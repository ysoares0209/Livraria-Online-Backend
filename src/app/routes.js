const livroController = require('./controllers/livro');

module.exports = (app) => {
    
    app.get('/livros', livroController.FindAll);
    app.get('/livros/:id', livroController.FindOne);
    app.post('/livros', livroController.Insert);
    app.put('/livros/:id', livroController.Update);
    app.delete('/livros/:id', livroController.Destroy);
}