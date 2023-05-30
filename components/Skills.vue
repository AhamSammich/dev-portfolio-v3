<template>
	<section class="page flex flex-col items-center justify-center gap-8">
		<h1 class="visually-hidden">Skills</h1>
		<TechStack
			title="Languages"
			:stack="['javascript', 'typescript', 'html', 'css']"
		/>
		<TechStack title="Frameworks" :stack="['vue', 'nuxt', 'astro', 'react']" />
		<TechStack title="Tools" :stack="['git', 'vscode']" />
	</section>
</template>
