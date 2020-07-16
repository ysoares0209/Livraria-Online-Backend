const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const sequelize = require('./src/config/conn');
const port = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    "Access-Control-Allow-Origin": "*"
}));

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta ${port}`);

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            require('./src/livros/routes')(app);
            require('./src/autor/routes')(app);
            require('./src/editora/routes')(app);
            require('./src/genero/routes')(app);
        })
        .catch(err => {
            console.error('Unable to connect to database: ', err);
        }); 
});
