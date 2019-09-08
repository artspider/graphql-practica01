import { prisma } from "../graphql-prisma/directorioGphql/generated/prisma-client";
import { GraphQLServer } from "graphql-yoga";

//Definiciones de types, queries y mutations (schemas)
import typeDefs from "./schemas/schema";

//definiciones de resolvers (resolvers)
import resolvers from "./resolvers/resolvers";

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  //middlewares: [permissions],
  context: async req => ({
    ...req,
    prisma,
    //claims: await Auth.checkSignedIn(req)
  })
  /* context:{ 
        prisma
      }, */
});

/*
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
*/

server.start({ port: 4000 });
console.log("Server is running on localhost:4000");