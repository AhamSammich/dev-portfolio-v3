<template>
  <div class="group">
    <div ref="logoRef" class="cursor-pointer p-1 rounded-full bg-[#ffffff30]">
      <LogoSvg :svg-size="40" @click="toggleColorSlider" />
    </div>

    <!-- click prompt -->
    <button
      :class="{
        'absolute top-16 left-7 flex flex-col transition-opacity duration-500 delay-700': true,
        'invisible pointer-events-none opacity-0':
          hideColorSlider && !(unclicked && !scrollAtTop),
      }"
      @click="toggleColorSlider"
    >
      <Icon
        name="solar:double-alt-arrow-up-bold-duotone"
        :class="{
          'animate-bounce': unclicked,
          'text-2xl absolute -left-4 -top-5': true,
        }"
      />
      <span
        v-if="unclicked"
        class="text-sm -mt-1 w-max rounded-sm p-1 bg-near-white bg-opacity-90 transition-opacity opacity-0 group-hover:opacity-100"
      >
        Not feeling this color?<br />Try this!
      </span>
      <span v-else class="visually-hidden">Close</span>
    </button>

    <!-- hue range input -->
    <div
      id="color-slider-container"
      :class="{
        'flex gap-4 rounded-md border-white shadow-sm origin-left -rotate-90 translate-y-[200px] absolute left-6': true,
        'invisible pointer-events-none scale-y-0 opacity-0': hideColorSlider,
      }"
    >
      <label class="visually-hidden">Change Color:</label>
      <input
        id="color-slider"
        v-model="inputHue"
        type="range"
        min="0"
        max="359"
        class="w-[180px] appearance-none bg-transparent cursor-pointer"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ThemePalette } from "~/composables/colorTheme";

const scrollAtTop = useState("scrollAtTop");

const hideColorSlider = ref(true);

const logoRef: Ref<HTMLElement | null> = ref(null);

const unclicked = ref(true);

const inputHue = ref(208);

function handleChange() {
  changeColor(inputHue.value);
}

function changeColor(h: number, s?: number, l?: number) {
  const newPalette = getColorPalette(h, s, l);
  const { primary, secondary, accent, base } = newPalette;
  document?.body.style.setProperty("--primary-color", primary);
  if (secondary) document?.body.style.setProperty("--secondary-color", secondary);
  if (accent) document?.body.style.setProperty("--accent-color", accent);
  if (base) document?.body.style.setProperty("--text-color", base);

  setColors(newPalette);
}

function setColors(palette: ThemePalette) {
  const { primaryColor, secondaryColor, accentColor } = useColors();
  console.log({ p: primaryColor.value, s: secondaryColor.value, a: accentColor.value });
  primaryColor.value = palette.primary;
  secondaryColor.value = palette.secondary;
  accentColor.value = palette.accent;
  console.log({ p: primaryColor.value, s: secondaryColor.value, a: accentColor.value });
}

function toggleColorSlider() {
  unclicked.value = false;
  hideColorSlider.value = !hideColorSlider.value;
}
</script>

<style scoped lang="postcss">
#color-slider-container {
  height: 0.75rem;
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
    hsl(330 50% 50%),
    hsl(360 50% 50%)
  );
}

button {
  color: var(--text-color);

  & .icon {
    stroke: var(--primary-color);
    stroke-width: 0.5px;
  }
}
</style>
