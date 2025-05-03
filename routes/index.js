const express = require('express');
const router = express.Router();
const connectDB = require('./../database/db');

router.get('/', async (req, res) => {
    const db = await connectDB();
    const books = await db.collection('books').find();
    res.render('index', { name: "Daksh" });
});

router.post('/books', async (req, res) => {
    try {
        const db = await connectDB();
        const data = {
            title: "Book Title",
            author: "Book Author"
        };
        const result = await db.collection('books').insertOne(data);
        res.json({ message: 'Book Created', id: result.insertedId });
        res.json("Book Created");
    } catch (error) {
        console.error('Insert error:', error);
        res.status(500).json({ error: 'Database insert failed' });
    }
});


router.get('/books/:id', (req, res) => {
    res.send("Single Book of id " + req.params.id);
}); 

router.patch('/books/:id', (req, res) => {
    res.send(`Single Book of id ${req.params.id}to update`);
}); 

router.delete('/books/:id', (req, res) => {
    res.send(`Single Book of id ${req.params.id}to delete`);
});

module.exports = router;