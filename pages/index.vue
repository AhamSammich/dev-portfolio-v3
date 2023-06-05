<template>
  <Header />

  <main
    ref="mainRef"
    class="grid motion-safe:scroll-smooth"
    :style="{ color: baseColor, backgroundColor: primaryColor }"
    @scroll.passive="handleScroll"
  >
    <Hero />

    <Icon
      name="solar:double-alt-arrow-down-bold-duotone"
      :class="{
        'absolute bottom-4 inset-x-0 mx-auto text-4xl lg:text-6xl drop-shadow-sm transition-opacity': true,
        'opacity-0': !scrollAtTop,
      }"
      :style="{ color: secondaryColor, strokeWidth: '0.5px', stroke: primaryColor }"
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
          'absolute bottom-[2dvh] right-6 text-4xl lg:text-6xl drop-shadow-sm transition-opacity': true,
          'opacity-0': scrollAtTop,
        }"
        :style="{ color: primaryColor, stroke: secondaryColor, strokeWidth: '0.5px' }"
      />
      <span class="visually-hidden">Back To Top</span>
    </button>
  </main>
</template>

<script setup lang="ts">
const mainRef: Ref<HTMLElement | null> = ref(null);
const mainScroll = ref(0);

const { primaryColor, secondaryColor, baseColor } = useColors();

const scrollAtTop = useState("scrollAtTop", () => true);

const resetMainScroll = () => mainRef.value?.scrollTo(0, 0);

function handleScroll() {
  if (!mainRef.value) return;
  mainScroll.value = mainRef.value.scrollTop;
  scrollAtTop.value = mainScroll.value === 0;
}

onMounted(() => {
  useObserver({ root: mainRef.value, unobserve: true });
});
</script>

<style scoped lang="postcss">
main {
  background-image: url("https://a-us.storyblok.com/f/1014509/3000x2000/e61e318abb/25134504_6985678_bw.jpg/m/filters:format(webp)");
  background-size: cover;
  background-blend-mode: screen;
}
</style>
