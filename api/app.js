const { Alimento } = require('./app/models');

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
// Alimento.create({ nome: 'Torresmo', tipo: 'Carne', porcao: '100', un_porcao: 'gramas', carboidratos: '0', un_carboidratos: 'gramas', proteinas: '61', un_proteinas: '1' });
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/alimentos', async (req, res) => {
    await Alimento.findAll().then(alimentos => {
        res.json(alimentos);
    });
});

app.get('/alimentos/:id', async (req, res) => {
    await Alimento.findByPk(req.params.id).then(alimento => {
        res.json(alimento);
    });
});

app.post('/alimentos', (req, res) => {}); // Criar
app.put('/alimentos/:id', (req, res) => {}); //Editar
app.delete('/alimentos/:id', (req, res) => {}); //Deletar
  
app.listen(3000);