const express = require('express');

const BookModel = require('../src/model/bookModel');

// Guarda todos os métodos e funcoes para a variável app
const app = express();

// Configura express para uso de JSON
app.use(express.json());

// Porta do servidor
const port = 8080;

// GET - Busca todos os livros
app.get('/books', async (req, res) => {
    const books = await BookModel.find({});
    res.status(200).json(books);
});

// GET - Busca livro por ID
app.get('/book-by-id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await BookModel.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET - Busca livro por nome
app.get('/book-by-name/:title', async (req, res) => {
    try {
        const title = req.params.title;
        console.log(title);

        const book = await BookModel.find({title: title});
        res.status(200).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// POST
app.post('/book', async (req, res) => {
    // Tenta realizar acao, caso erro, explode no terminal
    try {
        /*
            Model é o responsavel por lidar com o banco de dados
            dentro dele, existem metodos. Uma delas é create
            Armazena dentro da constante book, o que esse metodo retorna
        */
        const book = await BookModel.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// PATCH - Atualiza livro
app.patch('/update-book/:id', async (req, res) => {
    try {
        /*
            Funcao do Model recebe o parametro do ID,
            entao recebe queryUpdate que no caso e o que sera mudado do livro,
            entao terceiro parametro e um JSON que diz para que ele retorne o valor atualizado, caso contrario ele ira modificar mas nao ira retornar o novo valor
        */
        const id = req.params.id;
        const book = await BookModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// DELETE - Deleta livro pelo ID
app.delete('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await BookModel.findByIdAndRemove(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});