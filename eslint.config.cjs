const eslintPluginAstro = require('eslint-plugin-astro')
module.exports = [
    ...eslintPluginAstro.configs['flat/recommended'],
    {
        extends: ['plugin:astro/recommended'],
        overrides: [
            {
                files: ['*.astro'],
                parser: 'astro-eslint-parser',
                parserOptions: {
                    parser: '@typescript-eslint/parser',
                    extraFileExtensions: ['.astro'],
                },
            },
        ],
        plugins: ['unused-imports'],
        rules: {
            'no-console': 'error',
            'no-unused-vars': 'error',
            'unused-imports/no-unused-imports': 'error',
        },
    },
]
