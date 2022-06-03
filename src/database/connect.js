const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@servidordelivros.xh4dk2z.mongodb.net/?retryWrites=true&w=majority` , (error) => {
        (error) ? console.log(`Erro ao se conectar com o banco de dados.`) : console.log(`Conexao com o banco de dados bem-sucedida.`);
    });
}

module.exports = connectToDatabase;

/* Esse arquivo sera responsavel por realizar a conexao com o banco de dados, e vamos exportar a funcao para que ela seja feito no index */