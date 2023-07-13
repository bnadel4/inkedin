const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },  
  password: {
    type: String,
    required: true,
    minlength: 8, 
  },
  zipcode: {
    type: Number,
    minlength: 5,
    maxlength: 5,
  },
 
  contact: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
},
{
  timestamps: true
}
);

const User = model('User', userSchema);

module.exports = User;
