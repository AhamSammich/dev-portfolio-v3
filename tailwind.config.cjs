/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,md,mdx,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"near-black": "#333",
				"near-white": "#EEE",
			},
		},
	},
	plugins: [],
};
