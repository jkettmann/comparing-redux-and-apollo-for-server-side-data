import express from 'express';
import cors from 'cors';
import books from '../books';

const app = express();
app.use(cors());

app.get('/books', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(books));
});

app.listen({ port: 5000 }, () => {
  console.log('🚀 REST server ready at http://localhost:5000');
});
