'use strict';

const express = require('express');
const router = express.Router();

const Comment = require('../model/comment');

router.get('/comments/:placeId', (req, res, next) => {
  Comment.find({ placeId: req.params.placeId }, (err, comments) => {
    if(err) throw err;
    res.send(comments);
  });
});

router.post('/comments/:placeId', (req, res, next) => {
  const comment = new Comment({
    _id: new ObjectId(),
    placeId: req.body.placeId,
    content: req.body.content
  });

  comment.save().then(comment => {
    res.send(comment);
  });
});

module.exports = router;
