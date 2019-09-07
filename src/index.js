import { GraphQLServer } from "graphql-yoga";

//Type definitions (Schema)
const typeDefs = `
    type Query {
        hello: String
    }
`;

//Resolvers
const resolvers = {
  Query: {
    hello() {
      return "Mi primer query";
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("Servidor ejecutandose en localhost:4000");
});