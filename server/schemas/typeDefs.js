const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    zipcode: String
    isArtist: Boolean!
    contact: String
    imageURL: String
    posts: [Post!]
    createdAt: String!
    updatedAt: String!
  }

  type Post {
    _id: ID
    postText: String!
    imageURL: String
    username: String!
    createdAt: String!
    updatedAt: String!
    comments: [Comment!]
  }

  type Comment {
    commentId: ID
    commentText: String!
    username: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    userPosts(username: String!): [Post]
    post(postId: ID!): Post
    comments(postId: ID!): [Comment]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, zipcode: Int, isArtist: Boolean!, contact: String, imageURL: String): Auth
    login(email: String!, password: String!): Auth
    updateUser(zipcode: Int, isArtist: Boolean!, contact: String, imageURL: String): User
    addPost(postText: String!, imageURL: String): Post
    updatePost(postId: ID!, postText: String, imageURL: String): Post
    removePost(postId: ID!): Post
    addComment(postId: ID!, commentText: String!): Comment
    updateComment(postId: ID!, commentId: ID!, commentText: String!): Comment
    removeComment(postId: ID!, commentId: ID!): Comment
  }
`;

module.exports = typeDefs;
