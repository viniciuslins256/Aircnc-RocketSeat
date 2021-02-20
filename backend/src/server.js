//Importação do express ao projeto e das rotas

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect("mongodb+srv://aircnc:vinicius@aircnc.rb1ay.mongodb.net/databaseAircnc?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/*  Métodos principais da API REST - GET, POST, PUT e DELETE
GET -> Método utilizado para BUSCAR uma informação no backend. Ex: Preciso de uma listagem dos usuários 
POST -> Método utilizado para CRIAR uma nova informação no backend. 
PUT -> Método utilizado para EDITAR alguma informação no backend. Ex: Editar algum usuário.
DELETE -> Método utilizado para DELETAR alguma informação no backend.
*/

// req.query -> Acessar query params (para filtro, GET)
// req.params -> Acessar route params (para edição e deletar, PUT e DELETE )
// req.body -> Acessar corpo da requisição (para criação, POST)

app.use(express.json());
app.use(routes);

app.listen(3333);