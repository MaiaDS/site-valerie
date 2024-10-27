/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            white: '#FAF9F7',
            black: '#231F20',
            primary: '#F3EFE9',
            secondary: '#3F3756',
            accent: '#D54F61',
            transparent: 'transparent',
        },
        spacing: {
            0: '0',
            xxs: '0.25rem',
            xs: '0.5rem',
            sm: '0.75rem',
            rg: '1rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '3rem',
            xxl: '4.5rem',
        },
        fontFamily: {
            sans: ['Roboto'],
            roboto: ['Roboto', 'sans'],
            italiana: ['Italiana', 'sans'],
        },
        fontSize: {
            DEFAULT: ['1rem', { fontWeight: '400' }],
            h1: ['3rem', { fontWeight: '800' }],
            h2: ['2.25rem', { fontWeight: '700' }],
            h3: ['2rem', { fontWeight: '700' }],
            h4: ['1.5rem', { fontWeight: '600' }],
            sm: ['0.75rem', { fontWeight: '400' }],
            rg: ['1rem', { fontWeight: '400' }],
        },
    },
    plugins: [],
}
