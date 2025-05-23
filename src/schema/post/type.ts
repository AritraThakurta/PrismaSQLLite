import gql from 'graphql-tag';

export const postType = gql`
  type Post {
    id: Int!
    title: String!
    content: String
    published: Boolean!
  }
`;
