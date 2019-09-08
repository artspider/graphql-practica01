"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;
require('dotenv').config();

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
  endpoint: process.env.PRISMA_ENDPOINT
  //endpoint: `http://40.76.37.15:8080/directorioGphql/prod`
});
exports.prisma = new exports.Prisma();
