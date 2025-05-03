const EventEmitter = require('events');
const myEvent = new EventEmitter();
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(express.json());
const PORT = 3000;
const routes = require('./routes/index');
const connectDB = require('./database/db');
app.set('view engine', 'pug');
app.use(routes);
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });