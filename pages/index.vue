<template>
  <Header />

  <main
    ref="mainRef"
    class="grid motion-safe:scroll-smooth"
    :style="`
			background: radial-gradient(
            circle at 0% 0%, 
            #EEE, 
            ${primaryColor} ${spotlightSize}%
            );`"
    @scroll.passive="handleScroll"
  >
    <div
      id="main-background"
      class="pointer-events-none fixed left-4 right-1/2 top-4 z-0 aspect-square w-[30vw]"
      :style="`transform: translateY(${mainScroll / 20}px) translateX(${
        mainScroll / 20
      }%);`"
    ></div>

    <Hero />

    <Icon
      name="solar:double-alt-arrow-down-bold-duotone"
      :class="{
        'absolute bottom-4 inset-x-0 mx-auto text-4xl lg:text-6xl drop-shadow-md transition-opacity': true,
        'opacity-0': !scrollAtTop,
      }"
      :style="{ color: secondaryColor }"
    />

    <Skills />

    <Services />

    <ProjectGrid />

    <About />

    <Connect />

    <button ref="toTop" @pointerup="resetMainScroll" @keyup.enter="resetMainScroll">
      <Icon
        name="solar:double-alt-arrow-up-bold-duotone"
        :class="{
          'absolute bottom-[2dvh] right-6 text-4xl lg:text-6xl drop-shadow-md transition-opacity': true,
          'opacity-0': scrollAtTop,
        }"
        :style="{ color: primaryColor, stroke: secondaryColor, strokeWidth: '0.5px' }"
      />
      <span class="visually-hidden">Back To Top</span>
    </button>
  </main>
</template>

<script setup lang="ts">
const { x, y } = useMouse();

const mainRef: Ref<HTMLElement | null> = ref(null);
const mainScroll = ref(0);

const spotlightMaxSize = 40;
const spotlightSize = ref(spotlightMaxSize);

const { primaryColor, secondaryColor } = useColors();

const scrollAtTop = useState("scrollAtTop", () => true);

const resetMainScroll = () => mainRef.value?.scrollTo(0, 0);

function handleScroll() {
  if (!mainRef.value) return;
  mainScroll.value = mainRef.value.scrollTop;
  scrollAtTop.value = mainScroll.value === 0;
}

onMounted(() => {
  useObserver({ root: mainRef.value, unobserve: true });

  watchEffect(() =>
    mainRef.value?.style.setProperty(
      "background",
      `radial-gradient(
            circle at ${(x.value / window.innerWidth) * 100}% ${
        (y.value / window.innerHeight) * 100
      }%, 
            #EEE, 
            ${primaryColor.value} ${spotlightSize.value}%
            )`
    )
  );
});
</script>

<style scoped lang="postcss">
#main-background {
  --img-url: url("https://a-us.storyblok.com/f/1014509/1000x1000/d7ee635410/alh-logo-web-dark-transformed.png/m/filters:format(webp)");
  background: var(--img-url), v-bind(primaryColor);
  background-blend-mode: lighten;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  mask-image: var(--img-url);
  mask-size: contain;
  mask-repeat: no-repeat;
}
</style>
