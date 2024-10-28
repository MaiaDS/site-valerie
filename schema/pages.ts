import { defineField, defineType } from 'sanity'
import { contentBlock } from './blocks'

const headerFields = [
    defineField({
        name: 'title',
        title: 'Titre de la page',
        type: 'string',
        validation: (rule: any) => rule.required(),
    }),
]

export const homepage = defineType({
    name: 'homepage',
    title: "Page d'Accueil",
    type: 'document',
    fields: [
        // ...headerFields,
        defineField({
            name: 'introduction',
            title: 'Introduction',
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
                            type: 'block',
                            styles: [{ title: 'Normal', value: 'normal' }],
                            marks: {
                                decorators: [
                                    { title: 'Strong', value: 'strong' },
                                ],
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
        }),
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
                    name: 'price',
                    type: 'number',
                    title: 'Prix de la séance',
                },
                {
                    name: 'duration',
                    type: 'string',
                    title: 'Durée de la séance',
                },
                {
                    type: 'array',
                    name: 'items',
                    title: 'Liste des services',
                    of: [{ type: 'string' }],
                },
            ],
        }),
        defineField({
            name: 'about',
            title: 'A propos',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Titre',
                },
                {
                    name: 'picture',
                    type: 'image',
                    title: 'Photo',
                },
                {
                    name: 'content',
                    title: 'Contenu',
                    type: 'array',
                    of: [
                        {
                            type: 'block',
                            styles: [{ title: 'Normal', value: 'normal' }],
                            marks: {
                                decorators: [
                                    { title: 'Strong', value: 'strong' },
                                ],
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
