import { defineField, defineType } from 'sanity'
import { contentBlock } from './blocks'

export default defineType({
    name: 'post',
    title: 'Article',
    type: 'document',
    fields: [
        defineField({
            name: 'header',
            title: "Image d'en-tête",
            type: 'image',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                "Nom utilisé dans l'URL, par exemple blog/slug. Il est recommandé de le générer automatiquement.",
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'publishedDate',
            title: 'Published at',
            type: 'date',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'updatedDate',
            title: 'Updated at',
            type: 'date',
            validation: (rule) => rule.min(rule.valueOfField('publishedDate')),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string', title: 'Tag' }],
        }),
        contentBlock,
    ],

    preview: {
        select: {
            title: 'title',
            media: 'header',
        },
        prepare(selection) {
            return { ...selection }
        },
    },
})
