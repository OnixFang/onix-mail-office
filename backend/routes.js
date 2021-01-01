const router = require('express').Router();
const { getLetter, addLetter } = require('./controllers/letterController');

// =================== Letter API ===================
router.route('/letter').get(getLetter).post(addLetter);

// ================= React App page =================
router.get('*', (req, res, next) => {
  console.log(`Got request from ${req.originalUrl}`);
  res.status(200).send('Server works.');
});

module.exports = router;
