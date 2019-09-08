const Query = {
  hello: (root, args, context) => {
    return "Mi primer query";
  },
  showEmpresas: async (root, args, context) => {
    const empresas = await context.prisma.empresas();
    console.log(empresas.categoria)
    return empresas;
  },
  /*
  user: async (root, args, context) => {
    //Auth.checkSignedIn(req);
    return await context.prisma.user({ _id: args._id });
  },
  cuentas: (root, args, context) => {
    const opArgs = {};
    //Auth.checkSignedIn(req);
    console.log(args.query);
    if (args.query) {
      opArgs.where = {
        email: args.query
      };
      return context.prisma.cuentas(opArgs);
    } else {
      return context.prisma.cuentas();
    }
  },
  cuenta: async (root, args, context) => {
    //Auth.checkSignedIn(req);
    return await context.prisma.cuenta(args);
  }
  */
};

export { Query as default };
