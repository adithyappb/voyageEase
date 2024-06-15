const express = require('express');
const Hotel = require('../models/Hotel');

const router = express.Router();

router.get('/', async (req, res) => {
  const { location } = req.query;
  const hotels = await Hotel.find({ location: new RegExp(location, 'i') });
  res.json(hotels);
});

module.exports = router;

