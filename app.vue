<template>
  <div>
    <!-- <input
      type="color"
      class="absolute top-2 left-20 z-[9999]"
      @change="changePrimaryColor"
    />
    <input
      type="color"
      class="absolute top-8 left-20 z-[9999]"
      @change="changeSecondaryColor"
    /> -->
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

// primaryColor.value = "#b0bbde"; // hsl(226, 41%, 78%) rgb(176, 196, 222)
// secondaryColor.value = "#172554"; // hsl(226, 57%, 21%) rgb(23, 37, 84)

function changeColor(color: { hue: number }) {
  const { primary, secondary, accent } = getColorPalette(color.hue);
  primaryColor.value = primary;
  secondaryColor.value = secondary;
  accentColor.value = accent;
}

// function changePrimaryColor(ev: Event) {
//   if (!(ev.target instanceof HTMLInputElement)) return;
//   primaryColor.value = ev.target.value;
// }

// function changeSecondaryColor(ev: Event) {
//   if (!(ev.target instanceof HTMLInputElement)) return;
//   secondaryColor.value = ev.target.value;
// }
</script>

<style lang="postcss">
:root {
  /* --light-color: v-bind(lightColor); */
  /* --dark-color: v-bind(darkColor); */
  --hsl-near-white: 0 0% 93%;
  --hsl-near-black: 0 0% 20%;
  --near-white: hsl(var(--hsl-near-white) / 1);
  --near-black: hsl(var(--hsl-near-black) / 1);
  color: #172554;
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
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}
</style>
