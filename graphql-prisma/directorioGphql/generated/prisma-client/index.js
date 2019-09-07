"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Categoria",
    embedded: false
  },
  {
    name: "Empresa",
    embedded: false
  },
  {
    name: "Direccion",
    embedded: true
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:8080/drectorio/dev`
});
exports.prisma = new exports.Prisma();
