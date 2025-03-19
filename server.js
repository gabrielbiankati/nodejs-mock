const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [];

app.get('/', (req, res) => {
    res.send('Server online!'); 
});

app.get('/products', (req, res) => {
    res.json({ products: products }).send();
});

app.post('/products', (req, res) => {
    const { name, age, cpf } = req.body;
    products.push({id: products.length + 1, name, age, cpf});
    res.status(201).json().send();
});

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const productIndex = products.findIndex(product => product.id == id);
    if (productIndex == -1) {
        return res.status(404).send();
    }

    products[productIndex] = {...products[productIndex], name};

    res.status(204).json(products).send();
});

app.patch('/products', (req, res) => {  
    const { id } = req.params;
    const { name } = req.body;

    res.status(204).json(products).send();
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(product => product.id != id);

    res.status(200).json({id}).send();
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});