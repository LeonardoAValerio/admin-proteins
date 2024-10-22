import {defineField, defineType} from 'sanity'

export const infoType = defineType({
    name: 'InformacoesDaEmpresa',
    title: 'InformaçoesDaEmpresa',
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