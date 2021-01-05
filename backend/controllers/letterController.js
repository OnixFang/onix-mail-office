const Letter = require('../models/letterModel');

const getLetter = (req, res, next) => {
  const { passcode } = req.query;

  Letter.findOne({ passcode: passcode }, '-passcode -_id -__v', (err, letter) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred while getting your letter.');
    } else {
      if (!passcode) {
        console.log('No passcode proivded.');
        res.status(400).send('No passcode proivded.');
      } else {
        if (letter) {
          console.log('Letter found.', letter);
          res.status(200).json(letter);
        } else {
          console.log('No letter was found with the provided passcode.');
          res.status(404).send('No letter was found with the provided passcode.');
        }
      }
    }
  });
};

const addLetter = (req, res, next) => {
  const newLetter = new Letter(req.body);

  newLetter.save((err, letter) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    } else {
      console.log('Letter saved successfully.', letter);
      res.status(200).json(letter);
    }
  });
};

module.exports = {
  getLetter,
  addLetter,
};
