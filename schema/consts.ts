import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Global',
    type: 'document',
    fields: [
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
            description: 'Lien vers le compte isntagram',
        }),
        defineField({
            name: 'email',
            title: 'Adresse Email',
            type: 'string',
            description: 'Adresse email de contact type email@email.com',
        }),
    ],
})
