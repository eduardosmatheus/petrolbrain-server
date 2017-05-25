const mongoose = require('mongoose');
const Types = mongoose.Types;

const commentSchema = new mongoose.Schema({
  _id: Types.ObjectId,
  placeId: String,
  content: String
});

module.exports = mongoose.model('Comment', commentSchema);