import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['homepage', 'settings', 'page'])

export default defineConfig({
    name: 'default',
    title: 'Valérie Da Silva',

    projectId: 'chqqc08z',
    dataset: 'production',

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Settings')
                            .id('settings')
                            .child(
                                S.document()
                                    .schemaType('settings')
                                    .documentId('settings'),
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
