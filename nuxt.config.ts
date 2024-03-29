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
					rel: "preload",
					href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap",
					as: "style",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap",
					media: "print",
					onload: "this.media='all'",
				},
				{
					rel: "icon",
					href: "/alh-logo-1000.svg",
					type: "image/svg+xml",
				},
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
				storyblok: "simple-icons:storyblok",
				'socket.io': "devicon:socketio",
				express: "devicon:express",
				node: "mdi:nodejs",
				python: "mdi:language-python",
				'google cloud': "mdi:google-cloud",
				kubernetes: "mdi:kubernetes",
				postgresql: "devicon-plain:postgresql",
				next: "devicon:nextjs",
				firebase: "simple-icons:firebase",
				"c++": "devicon-plain:cplusplus",
				supabase: "simple-icons:supabase"
			},
		},
	},
	css: ["@/assets/css/observer.css"],
	devServer: {
		https:
			process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0"
				? {
						key: "./ssl/localhost+2-key.pem",
						cert: "./ssl/localhost+2.pem",
				  }
				: false,
		port: 2305,
	},
	image: {
		domains: ["https://a-us.storyblok.com"],
		presets: {
			screenshot: {
				modifiers: {
					width: 1800,
					height: 860,
					format: "webp",
				},
			},
		},
		storyblok: {
			baseURL: "https://a-us.storyblok.com",
		},
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"@vueuse/nuxt",
		"nuxt-simple-robots",
		"nuxt-simple-sitemap",
		"@nuxt/image-edge",
		"nuxt-vitest",
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
