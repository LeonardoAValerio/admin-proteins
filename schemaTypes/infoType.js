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
            name: 'Redes-sociais',
            type: 'string',
        }),
        defineField ({
            name: 'Link-maps',
            type: 'string',
        }),
        defineField ({
            name: 'Direitos',
            type: 'string',
        }),
    ]
})