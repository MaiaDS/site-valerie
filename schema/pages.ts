import { defineArrayMember, defineField, defineType } from 'sanity'
import { wysiwyg } from './blocks'

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
    ],
})

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        ...headerFields,
        defineField({
            name: 'headerImg',
            title: "Image d'en-tête",
            type: 'image',
        }),
        defineField({
            title: 'Contenu',
            name: 'content',
            type: 'array',
            of: [defineArrayMember(wysiwyg)],
        }),
    ],
})
