// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
		},
	},
	css: ["@/assets/css/global.css"],
	devServer: {
		https: {
			key: "./ssl/localhost+2-key.pem",
			cert: "./ssl/localhost+2.pem",
		},
		port: 2305,
	},
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
	tailwindcss: {
		viewer: false,
	},
});
