const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  postText: {
    type: String,
    required: 'Please write something!',
    minlength: 1,
    maxlength: 1000,
    trim: true,
  },
  imageURL: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  comments: [
    {
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
    },
  ],
},
{
  timestamps: true
}
);

const Post = model('Post', postSchema);

module.exports = Post;
