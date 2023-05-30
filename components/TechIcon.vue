<template>
	<div
		:data-name="iconName.toUpperCase()"
		class="icon-box relative aspect-square w-16 rounded-xl bg-blue-950 p-1 text-near-white shadow-md sm:w-20"
	>
		<Icon
			:name="iconName"
			class="absolute inset-0 m-auto h-8 w-8 sm:h-12 sm:w-12"
		/>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	iconName: string;
}>();
</script>

<style scoped lang="postcss">
.icon-box::after {
	content: attr(data-name);
	display: block;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: max-content;
	height: 100%;
	text-align: center;
	color: lightsteelblue;
	opacity: 0.5;
	transition: all 0.3s ease-in-out;
	font-family: Consolas, monospace, system-ui;
	font-size: smaller;
}

.icon-box:hover::after {
	color: #333;
	opacity: 1;
}
</style>
