import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'consts',
    title: 'Constantes',
    type: 'document',
    fields: [
        // defineField({
        //     name: 'logo',
        //     title: 'Logo',
        //     type: 'image',
        // }),
        // defineField({
        //     name: 'favicon',
        //     title: 'Favicon',
        //     type: 'image',
        //     description:
        //         "Icône utilisée dans l'onglet du navigateur. L'image doit avoir une taille de 250x250 et être de format .svg ou .png.",
        // }),
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
