const Empresa = {
    categoria: async (root, args, context) => {
        const Categoria = await context.prisma.empresa({ id: root.id }).categoria()
        return Categoria
    }
}

export { Empresa as default };