const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Create a new book
router.post('/', async (req, res) => {
  const { title, author } = req.body;

  try {
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  const { title, author } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author }, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
