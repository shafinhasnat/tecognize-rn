const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const PORT = 4000;

var todo = {};

app.get('/todo', (req, res) => {
    res.send(todo);
});

app.post('/todo', (req, res) => {
    const { title, description, done } = req.body;
    const id = randomBytes(4).toString('hex');
    const time = new Date();
    const data = {
        id,
        done,
        title,
        description,
        time
    }
    todo[id] = data;
    res.status(201).send(todo[id])
});

app.delete('/todo/:id', (req, res) => {
    const id = req.params.id;
    todo = todo.filter((item) => item.id !== id)
    res.send();
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
