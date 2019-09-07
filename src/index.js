import { prisma } from "../graphql-prisma/directorioGphql/generated/prisma-client";
import { GraphQLServer } from "graphql-yoga";


//Definiciones de types, queries y mutations (schemas)
import typeDefs from "./schemas/schema";

//Resolvers
const resolvers = {
  Query: {
    hello() {
      return "Hola desde Mi primer query";
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