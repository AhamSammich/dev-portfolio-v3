<template>
	<div
		class="project-card group relative flex w-full basis-[40%] flex-col gap-4 overflow-hidden rounded-xl"
	>
		<img
			:src="image.url"
			alt="Project Image"
			width="1850"
			height="885"
			class="object-cover"
		/>
		<div
			class="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-blue-950 bg-opacity-80 text-center text-white opacity-0 transition-opacity group-hover:opacity-100"
		>
			<h2 class="z-20 text-center font-bold group-hover:text-white">
				{{ title }}
			</h2>
			<p class="mx-auto max-w-[48ch] px-2 text-sm font-thin">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	description: string;
	link: string;
	image: {
		url: string;
		alt?: string;
	};
}>();
</script>

<style scoped></style>
