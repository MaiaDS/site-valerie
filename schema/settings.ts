import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'subtitle',
            title: 'Sous-titre',
            type: 'string',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
            description: 'Lien vers le compte instagram',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Téléphone',
            type: 'string',
            validation: (rule: any) => rule.required(),
        }),
    ],
})
