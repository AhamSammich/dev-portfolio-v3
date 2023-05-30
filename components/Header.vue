<template>
	<header
		class="fixed left-0 right-0 top-0 z-[999] flex items-start justify-between px-8 py-4"
	>
		<div class="flex items-center">
			<div
				:class="{
					'absolute left-8 top-6 w-8 origin-right outline-none transition-all xl:w-12': true,
					'scale-x-0 opacity-0': !scrollAtTop,
				}"
			>
				<img
					src="https://a-us.storyblok.com/f/1014509/1002x1004/78ee65ecbf/alh-logo-web-transformed.png/m/filters:format(webp)"
					alt="My Logo"
					width="64"
					height="64"
					class="object-cover object-center"
				/>
			</div>
			<!-- <h1 :class="{
                'relative font-bold transition-all origin-left whitespace-nowrap': true,
                'scale-x-0 opacity-0': scrollAtTop,
            }">Andre <span class="font-thin">L</span> Hammons</h1> -->
		</div>

		<nav
			:class="{
				hidden: scrollAtTop,
			}"
		>
			<DropNav />
		</nav>
		<nav
			:class="{
				'w-1/2 origin-right transition-all': true,
				'scale-x-0 opacity-0': !scrollAtTop,
			}"
		>
			<Nav />
		</nav>
	</header>
</template>

<script setup lang="ts">
const scrollAtTop = useState("scrollAtTop");
</script>

<style scoped lang="postcss">
h1::after,
h1::before {
	position: absolute;
	display: block;
}

h1::after {
	content: "Web Developer";
	font-size: smaller;
	font-weight: 300;
	right: 0;
}

h1::before {
	content: "";
	width: 100%;
	top: 100%;
	height: 1px;
	@apply bg-blue-950;
}
</style>
