import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'menus',
            title: 'Menus',
            type: 'object',
            fields: [
                {
                    name: 'home',
                    title: 'Accueil',
                    type: 'string',
                    initialValue: 'Accueil',
                },
                {
                    name: 'blog',
                    title: 'Blog',
                    type: 'string',
                    initialValue: 'Blog',
                },
                {
                    name: 'about',
                    title: 'À propos',
                    type: 'object',
                    fields: [
                        {
                            name: 'menu',
                            title: 'Nom du menu',
                            type: 'string',
                            initialValue: 'À propos',
                        },
                        {
                            name: 'header',
                            title: "Image d'en-tête",
                            type: 'image',
                        },
                    ],
                },
                {
                    name: 'contact',
                    title: 'Contact',
                    type: 'object',
                    fields: [
                        {
                            name: 'menu',
                            title: 'Nom du menu',
                            type: 'string',
                            initialValue: 'Contact',
                        },
                        {
                            name: 'header',
                            title: "Image d'en-tête",
                            type: 'image',
                        },
                    ],
                },
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
