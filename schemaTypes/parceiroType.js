import {defineField, defineType} from 'sanity'

export const parceiroType = defineType({
  name: 'parceiro',
  title: 'Parceiro',
  type: 'document',
  fields: [

    defineField({
      name: 'NmFoto',
      type: 'string',
    }),

      defineField({
        name: 'Foto',
        type: 'image',
      }),
  ],
})