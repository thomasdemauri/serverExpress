// Gerencia as variaveis ambiente
const dotenv = require('dotenv');
dotenv.config();

// Inicia o servidor 
require('./modules/express');

// Conecta com banco de dados
const connectToDatabase = require('./src/database/connect');
connectToDatabase();
