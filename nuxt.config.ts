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
				},
				{
					rel: "icon",
					href: "/alh-logo-1000.svg",
					type: "image/svg+xml",
				}
			],
		},
	},
	appConfig: {
		nuxtIcon: {
			aliases: {
				javascript: "devicon-plain:javascript",
				typescript: "devicon-plain:typescript",
				html: "devicon-plain:html5",
				css: "devicon-plain:css3",
				tailwind: "mdi:tailwind",
				vue: "devicon-plain:vuejs",
				nuxt: "devicon-plain:nuxtjs",
				astro: "devicon-plain:astro",
				git: "devicon-plain:git",
				vscode: "devicon-plain:vscode",
				react: "simple-icons:react",
			},
		},
	},
	css: ["@/assets/css/observer.css"],
	devServer: {
		https: {
			key: "./ssl/localhost+2-key.pem",
			cert: "./ssl/localhost+2.pem",
		},
		port: 2305,
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"@vueuse/nuxt",
		"nuxt-simple-robots",
		"nuxt-simple-sitemap",
	],
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ["/"],
		},
		preset: "netlify",
	},
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://andrehammons.dev",
		},
	},
	tailwindcss: {
		viewer: false,
	},
});
