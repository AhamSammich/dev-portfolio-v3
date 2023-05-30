<template>
	<div class="m-2 h-max w-max">
		<h2 v-if="title" class="mb-2 text-center text-xl font-bold lg:text-2xl">
			{{ title }}
		</h2>
		<div class="flex w-full gap-2 sm:gap-4">
			<TechIcon v-for="tech in stack" :key="tech" :iconName="tech" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title?: string;
	stack: string[];
}>();
</script>

<style scoped></style>
