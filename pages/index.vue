<template>
    <Header />

    <main ref="mainRef" class="grid motion-safe:scroll-smooth">
        <div id="main-background" class="fixed z-0 w-[40vw] top-[30%] left-1/2 right-0 aspect-square pointer-events-none"
            :style="`transform: translateY(-${mainScroll / 20}px);`">
        </div>

        <Hero />

        <Icon name="solar:double-alt-arrow-down-bold-duotone" :class="{
            'absolute bottom-4 mx-auto w-full text-9xl text-near-white drop-shadow-md drop-shadow-white transition-all duration-500 origin-bottom': true,
            'opacity-0': !scrollAtTop,
        }" />

        <About />

        <section id="projects" class="page flex flex-col items-center gap-20">
            <h1 class="text-3xl font-bold">Projects</h1>
            <ProjectGrid />
        </section>

        <section id="contact" class="page flex flex-col justify-center gap-12 items-center">
            <h1 class="text-3xl font-bold">This is the Contact Section</h1>
            <ul class="flex flex-col gap-12">
                <li>
                    <Icon name="mdi:email" />
                    Email
                </li>
                <li>
                    <Icon name="mdi:linkedin" />
                    LinkedIn
                </li>
                <li>
                    <Icon name="mdi:github" />
                    GitHub
                </li>
                <li>
                    <Icon name="mdi:twitter" />
                    Twitter
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
    mainRef.value?.addEventListener("scroll", () => {
        if (!mainRef.value) return;
        mainScroll.value = mainRef.value.scrollTop;
        scrollAtTop.value = (mainScroll.value < window.innerHeight);
    }, { passive: true });

    watchEffect(() => (
        mainRef.value?.style.setProperty('background', `radial-gradient(
            circle at ${x.value / window.innerWidth * 100}% ${y.value / window.innerHeight * 100}%, 
            white, 
            lightsteelblue 33%
            )`)
    ))
})
</script>

<style scoped lang="postcss">
#main-background {
    --img-url: url("https://a-us.storyblok.com/f/1014509/1000x1000/d7ee635410/alh-logo-web-dark-transformed.png/m/filters:format(webp)");
    background:
        var(--img-url),
        lightsteelblue;
    background-blend-mode: lighten;
    background-size: contain;
    border-radius: 50%;
    mask-image: var(--img-url);
    mask-size: contain;
}
</style>