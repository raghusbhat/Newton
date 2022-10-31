/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                Rampart: ['Open Sans', 'sans-serif'],
               },
            colors: {
                primary: '#0080FF',
                secondary: '#E547FF',
              }
        },
	},
	plugins: [],
}
