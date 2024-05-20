import { defineArrayMember, defineField, defineType } from 'sanity'
import { contentBlock, wysiwyg } from './blocks'

const headerFields = [
    defineField({
        name: 'menu',
        title: 'Titre du menu',
        type: 'string',
    }),
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
        defineField({
            name: 'introduction',
            title: 'Introduction',
            type: 'text',
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
            description:
                "Nom utilisé dans l'URL, par exemple blog/slug. Il est recommandé de le générer automatiquement.",
            options: {
                source: 'menu',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'headerImg',
            title: "Image d'en-tête",
            type: 'image',
        }),
        contentBlock,
    ],
})
