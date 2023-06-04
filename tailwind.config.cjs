/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,md,mdx,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				xs: "320px",
			},
			colors: {
				"near-black": "#333",
				"near-white": "#EEE",
			},
		},
	},
	plugins: [],
};
