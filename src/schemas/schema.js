//Type definitions (Schema)
const typeDefs = `

  type User {
    id: String!
    name: String!
  }
  
  type Categoria {
    _id: String!
    nombre: String!
    descripcion: String
    tags: [String]!
    empresa: Empresa
  }
    
  type Empresa {
    id: String!
    nombre: String!
    descripcion:String
    direccion: Direccion
    horarios: String!
    categoria: Categoria!
    tel: String!
    imagen: String
    rangoDePrecios: String
    ranking: Int
  }
    
  type Direccion {
    calle: String!
    numero: Int!
    colonia: String!
    ciudad: String!
    cp: String!
    estado: String!
  }

  type Query {
      hello: String
      showEmpresas: [Empresa]!
  }
`;

module.exports = typeDefs;
