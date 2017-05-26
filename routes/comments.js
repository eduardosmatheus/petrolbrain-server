'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Comment = require('../model/comment');

router.get('/places/:placeId/comments', (req, res, next) => {
  Comment.find({ placeId: req.params.placeId }, (err, comments) => {
    if(err) throw err;
    res.send(comments);
  });
});

router.post('/places/:placeId/comments', (req, res, next) => {
  const comment = new Comment({
    _id: new ObjectId(),
    placeId: req.body.placeId,
    content: req.body.content
  });

  comment.save().then(result => {
    res.send(result);
   });
});

module.exports = router;
