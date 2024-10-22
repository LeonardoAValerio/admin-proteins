import {defineField, defineType} from 'sanity'

export const infoTypes = defineType({
    name: 'Informacoes da Empresa',
    title: '',
    type: 'document',

    fields: [
        defineField ({
            name: 'Localizacao',
            type: 'string',
        }),
        defineField ({
            name: 'Contatos',
            type: 'string',
        }),
        defineField ({
            name: 'redesSocial',
            type: 'string',
        }),
        defineField ({
            name: 'linksMaps',
            type: 'string',
        }),
        defineField ({
            name: 'Direitos',
            type: 'string',
        }),
    ]
})