import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Global',
    type: 'document',
    fields: [
        defineField({
            name: 'menus',
            title: 'Menus',
            type: 'object',
            fields: [
                { name: 'home', title: 'Accueil', type: 'string' },
                { name: 'blog', title: 'Blog', type: 'string' },
                { name: 'about', title: 'À props', type: 'string' },
                { name: 'contact', title: 'Contact', type: 'string' },
            ],
        }),
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
