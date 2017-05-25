'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('This is just an Web API. No beautiful views around here.');
});

module.exports = router;
