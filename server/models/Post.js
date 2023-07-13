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
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
    ]
},
{
  timestamps: true
}
);

const Post = model('Post', postSchema);

module.exports = Post;
