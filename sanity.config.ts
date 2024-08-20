import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'
import { frFRLocale } from '@sanity/locale-fr-fr'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['homepage', 'menus', 'page', 'settings'])

export default defineConfig({
    name: 'default',
    title: 'Valérie Da Silva',

    projectId: 'chqqc08z',
    dataset: 'production',

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Contenu')
                    .items([
                        S.listItem()
                            .title('Global')
                            .id('settings')
                            .child(
                                S.document()
                                    .schemaType('settings')
                                    .documentId('settings'),
                            ),
                        S.listItem()
                            .title('Menus')
                            .id('menus')
                            .child(
                                S.document()
                                    .schemaType('menus')
                                    .documentId('menus'),
                            ),
                        S.listItem()
                            .title("Page d'accueil")
                            .id('homepage')
                            .child(
                                S.document()
                                    .schemaType('homepage')
                                    .documentId('homepage'),
                            ),
                        // Regular document types
                        S.documentTypeListItem('page').title('Pages'),
                        S.documentTypeListItem('post').title('Articles'),
                    ]),
        }),
        visionTool(),
        frFRLocale(),
    ],

    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(
                ({ schemaType }) => !singletonTypes.has(schemaType),
            ),
    },

    document: {
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(
                      ({ action }) => action && singletonActions.has(action),
                  )
                : input,
    },
})
