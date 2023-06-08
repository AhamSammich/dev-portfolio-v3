<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { primaryColor } = useColors();

useServerSeoMeta({
  title: "Andre Hammons | Web Developer",
  ogTitle: "Andre Hammons | Web Developer",
  description:
    "My name is Andre Hammons. Whether you're looking to grow your online business or just looking for a sweet custom personal landing page, I can help!",
  ogDescription:
    "My name is Andre Hammons. Whether you're looking to grow your online business or just looking for a sweet custom personal landing page, I can help!",
});

onMounted(() => {
  watchEffect(() => {
    useHeadSafe({
      meta: [
        {
          name: "theme-color",
          content: primaryColor.value,
        },
      ],
    });
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
  --primary-color: #cfd9e2;
  --secondary-color: #2966a3;
  --accent-color: #c91dc9;
  --text-color: #222222;
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
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--primary-color);
  color: var(--text-color);

  &::-webkit-scrollbar {
    width: 0.3rem;
    background: var(--secondary-color);
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
    background-color: var(--secondary-color);
    @apply shadow-md;
  }
}

.bg-icon {
  color: var(--primary-color);
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

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
