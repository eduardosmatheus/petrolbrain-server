'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const comments = require('./routes/comments');

const app = express();

app.use(bodyParser.json());
app.use('/', index);
app.use('/comments', comments);

module.exports = app;
