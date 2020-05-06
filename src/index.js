const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/conn');
const port = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            require('./app/livros/routes')(app);
            require('./app/autor/routes')(app);
            require('./app/editora/routes')(app);
            require('./app/genero/routes')(app);
        })
        .catch(err => {
            console.error('Unable to connect to database: ', err);
        }); 
});
