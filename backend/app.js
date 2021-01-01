// Modules
const express = require('express');
const Mongoose = require('mongoose');
const router = require('./routes');

// App configuration
const app = express();
app.use(express.json());
Mongoose.connect(
  process.env.MONGODB_URL,
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

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});
