import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      zipcode
      contact
      imageURL
      Posts {
        _id
        PostText
        imageURL
        createdAt
      }
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      zipcode
      contact
      imageURL
      Posts {
        _id
        PostText
        imageURL
        createdAt
      }
    }
  }
`;

export const GET_POSTS = gql`
  query posts {
    posts {
      _id
      username
      imageURL
      postText
      createdAt
      comments {
        commentId
        username
        commentText
        createdAt
      }
    }
  }
`;