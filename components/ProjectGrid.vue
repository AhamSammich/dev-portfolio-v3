<template>
	<div class="flex flex-wrap justify-center gap-4">
		<ProjectCard
			v-for="project in projects"
			:key="project.title"
			:title="project.title"
			:description="project.description"
			:image="project.image"
			:link="project.link.url"
		/>
	</div>
</template>

<script setup lang="ts">
const projects = [
	{
		title: "Shop Lindsay Nicole",
		description:
			"A custom website made for a YouTube content creator and her small reselling business based on her design input.",
		skills: "JavaScript, CSS, Nuxt.js, Storyblok, REST API",
		link: {
			url: "https://lindsaynicolepm.com",
		},
		image: {
			url: "https://a-us.storyblok.com/f/1014509/1851x884/6557c81d02/lindsaynicolepm.png",
		},
	},
	{
		title: "Let's Play Koi-Koi",
		description:
			"An interactive card game featuring designs by various artists.",
		skills: "JavaScript, Vue.js",
		link: {
			url: "https://lets-play-koikoi.vercel.app/hanafuda-gallery",
		},
		image: {
			url: "https://a-us.storyblok.com/f/1014509/1846x885/22739eea0c/lets-play-koikoi.png",
		},
	},
];
</script>

<style scoped></style>
