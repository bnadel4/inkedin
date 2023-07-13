const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  commentText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Comment = model('Comment', commentSchema);

module.exports = Comment;