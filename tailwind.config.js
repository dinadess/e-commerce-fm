/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: '1rem',
		},
		extend: {
			fontFamily: {
				sans: ['Kumbh Sans', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				/** Primary */
				orange: 'hsl(26, 100%, 55%)',
				'pale-orange': 'hsl(25, 100%, 94%)',
				/** Neutral */
				'very-dark-blue': 'hsl(220, 13%, 13%)',
				'dark-grayish-blue': 'hsl(219, 9%, 45%)',
				'grayish-blue': 'hsl(220, 14%, 75%)',
				'light-grayish-blue': 'hsl(223, 64%, 98%)',
				// 'white': 'hsl(0, 0%, 100%)',
				// 'black': 'hsl(0, 0%, 0%)'
			},
			screens: {
				tablet: '900px',
			},
		},
	},
	plugins: [],
};
