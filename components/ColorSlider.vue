<template>
  <div id="color-slider-container" class="flex gap-4 rounded-md">
    <label class="visually-hidden">Change Color:</label>
    <input
      id="color-slider"
      v-model="inputHue"
      type="range"
      min="0"
      max="359"
      class="w-full appearance-none bg-transparent cursor-pointer"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
const inputHue = ref(226);

const { primaryColor, secondaryColor, accentColor, baseColor } = useColors();

function handleChange() {
  changeColor(inputHue.value);
}

function changeColor(h: number, s?: number, l?: number) {
  const { primary, secondary, accent, base } = getColorPalette(h, s, l);
  primaryColor.value = primary;
  secondaryColor.value = secondary;
  accentColor.value = accent;
  baseColor.value = base;
}
</script>

<style scoped lang="postcss">
#color-slider-container {
  height: 0.5rem;
  background: linear-gradient(
    90deg,
    hsl(0 50% 50%),
    hsl(30 50% 50%),
    hsl(60 50% 50%),
    hsl(90 50% 50%),
    hsl(120 50% 50%),
    hsl(150 50% 50%),
    hsl(180 50% 50%),
    hsl(210 50% 50%),
    hsl(240 50% 50%),
    hsl(270 50% 50%),
    hsl(300 50% 50%),
    hsl(330 50% 50%)
  );
}
</style>
