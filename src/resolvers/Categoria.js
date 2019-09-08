const Categoria = {
    empresa: async (root, args, context) => {
        const Empresa = await context.prisma.categoria({ _id: root._id }).empresa()
        return Empresa
    }
}

export { Categoria as default };