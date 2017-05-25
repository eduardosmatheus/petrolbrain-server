'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/', index);

module.exports = app;
