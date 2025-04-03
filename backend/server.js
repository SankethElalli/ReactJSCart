const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'shopping_cart',
    connectionLimit: 10
});

app.get('/api/products', (req, res) => {
    pool.query('SELECT * FROM tbl_products', (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error occurred' });
        res.json(results || []);
    });
});

app.post('/api/products', (req, res) => {
    const { product_name, product_price, product_image } = req.body;
    pool.query('INSERT INTO tbl_products (product_name, product_price, product_image) VALUES (?, ?, ?)',
        [product_name, product_price, product_image],
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Database error occurred' });
            res.json({ id: result.insertId, message: 'Product added successfully' });
        });
});

app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const { product_name, product_price, product_image } = req.body;
    pool.query('UPDATE tbl_products SET product_name = ?, product_price = ?, product_image = ? WHERE id = ?',
        [product_name, product_price, product_image, id],
        (err) => {
            if (err) return res.status(500).json({ error: 'Database error occurred' });
            res.json({ message: 'Product updated successfully' });
        });
});

app.delete('/api/products/:id', (req, res) => {
    pool.query('DELETE FROM tbl_products WHERE id = ?', [req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: 'Database error occurred' });
            res.json({ message: 'Product deleted successfully' });
        });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
