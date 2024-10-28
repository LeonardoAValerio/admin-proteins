import {defineField, defineType} from 'sanity'

export const produtoType = defineType({
  name: 'produto',
  title: 'Produto',
  type: 'document',
  fields: [
    defineField({
        name: 'produto',
        type: 'string',
    }),
    defineField({
        name: 'Descricao',
        type: 'string',
    }),
    defineField({
        name: 'Imagem',
        type: 'image',
    }),
  ],
})
