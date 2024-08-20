import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
            description: 'Lien vers le compte isntagram',
            validation: (rule: any) => rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Prix de la séance',
            type: 'number',
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
