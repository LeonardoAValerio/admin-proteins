import {defineField, defineType} from 'sanity'

export const infoTypes = defineType({
    name: 'Informacoes da Empresa',
    title: '',
    type: 'document',

    fields: [
        defineField ({
            name: 'Localizacao',
            type: 'String',
        }),
        defineField ({
            name: 'Contatos',
            type: 'String',
        }),
        defineField ({
            name: 'Redes-sociais',
            type: 'String',
        }),
        defineField ({
            name: 'Link-maps',
            type: 'String',
        }),
        defineField ({
            name: 'Direitos',
            type: 'String',
        }),
    ]
})