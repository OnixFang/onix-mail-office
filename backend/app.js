// Modules
const express = require('express');
const Mongoose = require('mongoose');
const router = require('./routes');

// Environment variables
const { HOST, PORT, MONGODB_URL } = process.env;

// App configuration
const app = express();
app.use(express.json());
Mongoose.connect(
  MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log('An error occurred while connecting to the database.');
      throw err;
    }
  }
);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
