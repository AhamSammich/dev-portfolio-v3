<template>
	<Header />

	<main ref="mainRef" class="grid motion-safe:scroll-smooth">
		<div
			id="main-background"
			class="pointer-events-none fixed left-4 right-1/2 top-4 z-0 aspect-square w-[30vw] opacity-50"
			:style="`transform: translateY(${mainScroll / 20}px) translateX(${
				mainScroll / 20
			}%);`"
		></div>

		<Hero />

		<Icon
			name="solar:double-alt-arrow-down-bold-duotone"
			:class="{
				'drop-shadow-white absolute bottom-4 mx-auto w-full origin-bottom text-4xl text-near-white drop-shadow-md transition-all duration-500 motion-safe:animate-bounce lg:text-6xl': true,
				'opacity-0': !scrollAtTop,
			}"
		/>

		<Skills />

		<Services />

		<About />

		<section id="projects" class="page flex flex-col items-center gap-20">
			<h1 class="text-2xl font-bold">Projects</h1>
			<ProjectGrid />
		</section>

		<section
			id="contact"
			class="page flex flex-col items-center justify-center gap-12"
		>
			<h1 class="text-2xl font-bold">Connect with me</h1>
			<ul class="flex flex-col gap-8">
				<li>
					<Icon name="mdi:email" />
					connect@ahammons.me
				</li>
				<li>
					<Icon name="mdi:linkedin" />
					/in/mynameisandre
				</li>
				<li>
					<Icon name="mdi:github" />
					AhamSammich
				</li>
				<li>
					<Icon name="mdi:twitter" />
					hammons_dev
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup lang="ts">
const { x, y } = useMouse();

const mainRef: Ref<HTMLElement | null> = ref(null);
const mainScroll = ref(0);

const scrollAtTop = useState("scrollAtTop", () => true);

onMounted(() => {
	mainRef.value?.addEventListener(
		"scroll",
		() => {
			if (!mainRef.value) return;
			mainScroll.value = mainRef.value.scrollTop;
			scrollAtTop.value = mainScroll.value === 0;
		},
		{ passive: true }
	);

	watchEffect(() =>
		mainRef.value?.style.setProperty(
			"background",
			`radial-gradient(
            circle at ${(x.value / window.innerWidth) * 100}% ${
				(y.value / window.innerHeight) * 100
			}%, 
            #EEE, 
            lightsteelblue 50%
            )`
		)
	);
});
</script>

<style scoped lang="postcss">
#main-background {
	--img-url: url("https://a-us.storyblok.com/f/1014509/1000x1000/d7ee635410/alh-logo-web-dark-transformed.png/m/filters:format(webp)");
	background: var(--img-url), lightsteelblue;
	background-blend-mode: lighten;
	background-size: contain;
	background-repeat: no-repeat;
	border-radius: 50%;
	mask-image: var(--img-url);
	mask-size: contain;
	mask-repeat: no-repeat;
}
</style>
