import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
mutation addPost($postText: String!, $username: String!, $imageURL: String) {
  addPost(postText: $postText, username: $username, imageURL: $imageURL) {
    _id
    postText
    username
    imageURL
    createdAt
  }
}
`;

export const ADD_COMMENT = gql`
mutation addComment($postId: ID!, $commentText: String!, $username: String!) {
  addComment(postId: $postId, commentText: $commentText, username: $username) {
    _id
    comments {
      commentText
      username
    }
  }
}
`;
