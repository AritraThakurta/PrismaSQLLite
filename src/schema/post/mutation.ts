import gql from 'graphql-tag';

export const postMutation = gql`
  type Mutation {
    createPost(title: String!, content: String): Post!
    updatePost(id: Int!, title: String, content: String, published: Boolean): Post
    deletePost(id: Int!): Post
  }
`;
