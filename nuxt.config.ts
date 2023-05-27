// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap",
					// as: "style",
					// onload: "() => this.rel = stylesheet",
				},
			],
		},
	},
	appConfig: {
		nuxtIcon: {
			aliases: {
				"js": "devicon-plain:javascript",
				"ts": "devicon-plain:typescript",
				"html": "devicon-plain:html5",
				"css": "devicon-plain:css3",
				"vue": "devicon-plain:vuejs",
				"nuxt": "devicon-plain:nuxtjs",
				"astro": "devicon-plain:astro",
				"git": "devicon-plain:git",
				"vscode": "devicon-plain:vscode",
				"react": "simple-icons:react"
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
