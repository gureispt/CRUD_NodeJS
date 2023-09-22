const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['fullStack Master' , 'Desenvolvimento de Games', 'Viver de YouTube'];

// CREATE 
server.post('/cursos' , (req, res) => {
    const {name} = req.body;
    cursos.push(name);
    return res.json(cursos);
});

// GET para um curso
server.get('/cursos/:index', (req, res) => {
    const {index} = req.params;

    return res.json(cursos[index]);
});

// GET para todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

// UPDATE
server.put('/cursos/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;
    cursos [index] = name;
    return res.json(cursos);
});

// DELETE
server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params
    cursos.splice(index, 1);
    return res.json({message: 'O curso foi deletado'});
});



server.listen(3000, () => console.log("Servidor rodando!"));