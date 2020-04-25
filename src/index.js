const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000');
});
