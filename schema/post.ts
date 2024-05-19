import { defineField, defineType } from 'sanity'
import { section, wysiwyg } from './blocks'

export default defineType({
    name: 'post',
    title: 'Article',
    type: 'document',
    fields: [
        defineField({
            name: 'headerImg',
            title: "Image d'en-tête",
            type: 'image',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
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
        }),
        defineField({
            name: 'publishedDate',
            title: 'Published at',
            type: 'date',
        }),
        defineField({
            name: 'updatedDate',
            title: 'Updated at',
            type: 'date',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string', title: 'Tag' }],
        }),
        defineField({
            name: 'content',
            title: 'Contenu',
            type: 'array',
            of: [
                section,
                {
                    title: 'Text + Image',
                    name: 'textImgBlock',
                    type: 'object',
                    fields: [
                        { name: 'blockImg', type: 'image', title: 'Image' },
                        { type: 'text', name: 'blockText', title: 'Text' },
                    ],
                },
                { type: 'image' },
                { type: 'file' },
                wysiwyg,
            ],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'headerImg',
        },
        prepare(selection) {
            return { ...selection }
        },
    },
})
