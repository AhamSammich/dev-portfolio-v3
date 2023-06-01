<template>
  <div>
    <ColorSlider
      class="absolute top-4 left-20 rounded-md w-max z-[9999]"
      @color-change="(color) => changeColor(color)"
    />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const primaryColor = usePrimaryColor();
const secondaryColor = useSecondaryColor();
const accentColor = useAccentColor();

function changeColor(color: { hue: number }) {
  const { primary, secondary, accent } = getColorPalette(color.hue);
  primaryColor.value = primary;
  secondaryColor.value = secondary;
  accentColor.value = accent;
}
</script>

<style lang="postcss">
:root {
  --hsl-near-white: 0 0% 93%;
  --hsl-near-black: 0 0% 20%;
  --near-white: hsl(var(--hsl-near-white) / 1);
  --near-black: hsl(var(--hsl-near-black) / 1);
}

body {
  font-family: Rubik, san-serif;
  overflow: hidden;
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

:is(button, a) .icon {
  color: v-bind(accentColor);
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
