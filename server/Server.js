const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example API route for getting books
app.get('/api/books', (req, res) => {
  res.send([{ name: "Book 1", author: "Author 1", year: 2023 }]);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
