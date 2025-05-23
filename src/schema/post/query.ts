import gql from 'graphql-tag';

export const postQuery = gql`
  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }
`;
