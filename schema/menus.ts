import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menus',
    title: 'Menus du site',
    type: 'document',
    fields: [
        defineField({
            name: 'items',
            title: 'Menus',
            type: 'object',
            fields: [
                {
                    name: 'home',
                    title: 'Accueil',
                    type: 'string',
                    initialValue: 'Accueil',
                    validation: (rule: any) => rule.required(),
                },
                {
                    name: 'blog',
                    title: 'Blog',
                    type: 'string',
                    initialValue: 'Blog',
                    validation: (rule: any) => rule.required(),
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
                            validation: (rule: any) => rule.required(),
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
                            validation: (rule: any) => rule.required(),
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
    ],
})
