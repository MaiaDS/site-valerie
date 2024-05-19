import { defineArrayMember, defineField, defineType } from 'sanity'

export const wysiwyg = {
    type: 'block',
    styles: [{ title: 'Normal', value: 'normal' }],
    lists: [{ title: 'Bullet', value: 'bullet' }],
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
}

export const section = {
    name: 'section',
    title: 'Section',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Titre' },
        {
            name: 'content',
            title: 'Contenu',
            type: 'array',
            of: [
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
        },
    ],
}
