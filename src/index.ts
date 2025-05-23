import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/post/typedef";
import { resolvers } from "./resolvers/resolvers";
import {prisma} from "./context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
    context: async () => ({ prisma }),
    listen: { port: 4000 },
  }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
