<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { primaryColor, secondaryColor } = useColors();

useServerSeoMeta({
  title: "Andre Hammons | Web Developer",
  ogTitle: "Andre Hammons | Web Developer",
  description:
    "My name is Andre Hammons. Whether you're looking to grow your online business or just looking for a sweet custom personal landing page, I can help!",
  ogDescription:
    "My name is Andre Hammons. Whether you're looking to grow your online business or just looking for a sweet custom personal landing page, I can help!",
});

onMounted(() => {
  useHeadSafe({
    meta: [
      {
        name: "theme-color",
        content: primaryColor,
      },
    ],
  });
});
</script>

<style lang="postcss">
:root {
  --hsl-near-white: 0 0% 100%;
  --hsl-near-black: 0 0% 20%;
  --near-white: hsl(var(--hsl-near-white) / 1);
  --near-black: hsl(var(--hsl-near-black) / 1);
}

body {
  font-family: Rubik, san-serif;
  overflow: hidden;
  color: #fcfcfc;
}

h1,
h2,
h3 {
  font-weight: 700;
}

h1 {
  @apply text-3xl md:text-3xl xl:text-4xl;
}

h2 {
  @apply text-xl lg:text-2xl xl:text-3xl;
}

main {
  color: var(--near-black);
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  /* scroll-snap-type: y proximity; */

  &::-webkit-scrollbar {
    width: 0.3rem;
    background: v-bind(secondaryColor);
  }

  &::-webkit-scrollbar-thumb {
    background-color: hsl(var(--hsl-near-white) / 0.9);
  }
}

.page {
  height: max-content;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  padding: 3rem 0;
  position: relative;
  scroll-snap-align: start start;

  &:nth-of-type(2n) {
    color: var(--near-white);
    background-color: v-bind(secondaryColor);
    @apply shadow-md;
  }
}

.hidden {
  display: none;
}

.visually-hidden {
  position: absolute;
  pointer-events: none;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}
</style>
