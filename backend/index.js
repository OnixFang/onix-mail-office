// Modules
const express = require('express');
const router = require('./routes');

// App configuration
const app = express();
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});
