import { defineField, defineType } from 'sanity'
import { contentBlock } from './blocks'

const headerFields = [
    defineField({
        name: 'title',
        title: 'Titre de la page',
        type: 'string',
    }),
]

export const homepage = defineType({
    name: 'homepage',
    title: "Page d'Accueil",
    type: 'document',
    fields: [
        ...headerFields,
        defineField({
            name: 'subtitle',
            title: 'Sous-titre',
            type: 'string',
        }),
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    marks: {
                        decorators: [{ title: 'Strong', value: 'strong' }],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        defineField({
            name: 'services',
            title: 'Services',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Titre',
                },
                {
                    name: 'content',
                    title: 'Contenu',
                    type: 'array',
                    of: [
                        {
                            name: 'service',
                            type: 'object',
                            fields: [
                                {
                                    type: 'image',
                                    name: 'serviceImg',
                                },
                                {
                                    type: 'array',
                                    name: 'items',
                                    title: 'Liste',
                                    of: [{ type: 'string' }],
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
})

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        ...headerFields,
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            readOnly: true,
            hidden: true,
        }),
        contentBlock,
    ],
})
