import {defineField, defineType} from 'sanity'

export const paragrafoType = defineType({
  name: 'paragrafo',
  title: 'paragrafo',
  type: 'document',
  fields: [

    defineField({
      name: 'paragrafo',
      type: 'string',
    }),
  ],
})