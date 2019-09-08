const Query = {
  hello: (root, args, context) => {
    return "Mi primer query";
  },
  empresa: async (root, args, context) => {
    return await context.prisma.empresa(args);
  },
  empresas: async (root, args, context) => {    
    return await context.prisma.empresas();
  },
  categoria: async (root, args, context) => {
    return await context.prisma.categoria(args);
  },
  categorias: async (root, args, context) => {
    return await context.prisma.categorias();
  },
};

export { Query as default };
