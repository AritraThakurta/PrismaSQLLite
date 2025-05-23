import { Context } from '../context';

export const resolvers = {
  Query: {
    posts: async (_: any, __: any, context: Context) =>
      context.prisma.post.findMany(),

    post: async (_: any, { id }: { id: number }, context: Context) =>
      context.prisma.post.findUnique({ where: { id } }),
  },

  Mutation: {
    createPost: async (_: any, args: any, context: Context) =>
      context.prisma.post.create({ data: args }),

    updatePost: async (_: any, { id, ...data }: any, context: Context) =>
      context.prisma.post.update({ where: { id }, data }),

    deletePost: async (_: any, { id }: { id: number }, context: Context) =>
      context.prisma.post.delete({ where: { id } }),
  },
};
