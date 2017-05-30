'use strict';

const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Comment = require('../model/comment');

router.get('/', (req, res) => {
  res.send('You must pass an placeId to proceed.');
});

router.get('/:placeId/comments', (req, res) => {
  Comment.find({ placeId: req.params.placeId }, (err, comments) => {
    res.send(comments);
  });
});

router.post('/:placeId/comments', (req, res) => {
  new Comment({ _id: new ObjectId(), placeId: req.body.placeId, content: req.body.content })
  .save().then(result => {
    if (result) {
      Comment.find({ placeId: req.params.placeId }, (err, comments) => {
        res.send(comments);
      });
    } else {
      res.status(400).send("Ocorreram problemas ao salvar o comentário.");
    }
   });
});

module.exports = router;
