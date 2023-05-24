<template>
    <Header />

    <main ref="mainRef" class="grid motion-safe:scroll-smooth">
        <section id="hero" ref="heroRef" class="page flex items-center justify-around">
            <div class="z-[1] px-8">
                <h1 class="text-3xl font-bold text-near-black">
                    This is the Hero Section
                </h1>
                <p class="text-xl">This is a description</p>
            </div>
            <div id="hero-image" class="fixed z-0 w-[40vw] left-1/2 right-0 aspect-square pointer-events-none"
                :style="`transform: translateY(-${mainScroll / 20}px);`">
            </div>
            <Icon name="ic:round-arrow-downward" :class="{
                'absolute bottom-4 mx-auto w-full text-5xl animate-bounce transition-all duration-1000 origin-bottom': true,
                'opacity-0': !scrollAtTop,
            }" />
        </section>

        <section id="about" class="page fixed top-0 left-0 flex justify-around items-center">
            <div class="grid gap-4 p-8">
                <h1 class="text-3xl font-bold">This is the About Section</h1>
            </div>
            <div id="about-image" class="h-full">
                <img src="" alt="This is a professional headshot" class="object-contain" />
            </div>
        </section>

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
        scrollAtTop.value = (mainScroll.value === 0);
    }, { passive: true });

    watchEffect(() => (
        mainRef.value?.style.setProperty('background', `radial-gradient(
            circle at ${x.value / window.innerWidth * 100}% ${y.value / window.innerHeight * 100}%, 
            white, 
            lightsteelblue 25% 75%,
            lightgray
            )`)
    ))
})
</script>

<style scoped lang="postcss">
#hero-image {
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