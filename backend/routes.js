const router = require('express').Router();

router.get('*', (req, res, next) => {
  console.log(`Got request from ${req.originalUrl}`);
  res.status(200).send('Server works.');
});

module.exports = router;
