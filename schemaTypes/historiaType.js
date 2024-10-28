import {defineField, defineType} from 'sanity'

export const paragrafoType = defineType({
  name: 'paragrafo',
  title: 'Historia',
  type: 'document',
  fields: [
    defineField({
      name: 'paragrafo',
      type: 'string',
    }),
  ],
})