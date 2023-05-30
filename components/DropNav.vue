<template>
	<div>
		<div class="absolute right-4 top-4 z-[9999999]">
			<MenuButton @pointerup="toggleMenu" :force-state="menuIsOpen" />
		</div>
		<div
			:class="{
				'absolute inset-0 z-[99999] mx-auto h-max origin-top bg-near-white py-4 shadow-lg transition-all': true,
				'scale-y-0 opacity-0': !menuIsOpen,
			}"
		>
			<Nav :flex-col="true" />
		</div>
	</div>
</template>

<script setup lang="ts">
const menuIsOpen = ref(false);
const toggleMenu = () => {
	menuIsOpen.value = !menuIsOpen.value;
};

const scrollAtTop = useState("scrollAtTop");

watchEffect(() => {
	if (scrollAtTop.value && menuIsOpen.value) toggleMenu();
});
</script>

<style scoped lang="postcss">
ul {
	padding-top: 1rem;
}

li {
	z-index: 49;
	padding: 1rem 0;
	width: 50%;

	&:not(:first-child) {
		border-top: 1px solid var(--sec-color);
	}
}
</style>
