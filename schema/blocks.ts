import { defineArrayMember, defineField, defineType } from 'sanity'

export const wysiwyg = {
    type: 'block',
    styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Sous-titre', value: 'h3' },
    ],
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

export const textImage = {
    title: 'Text + Image',
    name: 'textImgBlock',
    type: 'object',
    fields: [
        {
            name: 'blockImg',
            type: 'image',
            title: 'Image',
            validation: (rule: any) => rule.required(),
        },
        {
            type: 'text',
            name: 'blockText',
            title: 'Text',
            validation: (rule: any) => rule.required(),
        },
    ],
}

export const section = {
    name: 'section',
    title: 'Section',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre',
            validation: (rule: any) => rule.required(),
        },
        {
            name: 'content',
            title: 'Contenu',
            type: 'array',
            of: [textImage, { type: 'image' } /*{ type: 'file' }*/, wysiwyg],
        },
    ],
}

export const contentBlock = defineField({
    name: 'content',
    title: 'Contenu',
    type: 'array',
    of: [section, textImage, { type: 'image' } /*{ type: 'file' }*/, wysiwyg],
})
