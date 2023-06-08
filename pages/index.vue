<template>
  <Header />

  <main
    ref="mainRef"
    class="grid motion-safe:scroll-smooth"
    @scroll.passive="handleScroll"
  >
    <Hero />

    <Icon
      name="solar:double-alt-arrow-down-bold-duotone"
      :class="{
        'scroll-prompt absolute bottom-2 inset-x-0 mx-auto text-4xl lg:text-6xl drop-shadow-sm transition-opacity': true,
        'opacity-0': !scrollAtTop,
      }"
    />

    <LazySkills />

    <LazyServices />

    <LazyProjectGrid />

    <LazyAbout />

    <LazyConnect />

    <button ref="toTop" @pointerup="resetMainScroll" @keyup.enter="resetMainScroll">
      <Icon
        name="solar:double-alt-arrow-up-bold-duotone"
        :class="{
          'absolute bottom-[2dvh] right-6 text-4xl lg:text-6xl drop-shadow-sm transition-opacity': true,
          'opacity-0': scrollAtTop,
        }"
      />
      <span class="visually-hidden">Back To Top</span>
    </button>
  </main>
</template>

<script setup lang="ts">
const mainRef: Ref<HTMLElement | null> = ref(null);
const mainScroll = ref(0);

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

.icon {
  /* stroke-width: 0.5px; */
  stroke: var(--secondary-color);
  color: var(--primary-color);
}

.scroll-prompt {
  stroke: var(--primary-color);
  color: var(--secondary-color);
  animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
    3s Infinite linear floating;
  animation-delay: 0s, 1s;
}
</style>
