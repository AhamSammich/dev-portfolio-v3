<template>
  <div ref="rootRef" class="group">
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
        class="p-1 -mt-1 text-sm transition-opacity rounded-sm opacity-0 w-max bg-near-white bg-opacity-90 group-hover:opacity-100"
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
        step="10"
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

const rootRef: Ref<HTMLElement | null> = ref(null);
const logoRef: Ref<HTMLElement | null> = ref(null);

const unclicked = ref(true);

const inputHue = ref(263);

function handleChange() {
  changeColor(inputHue.value);
  storeValue();
}

function changeColor(h: number, s?: number, l?: number) {
  console.info("Applying new theme...");
  const newPalette = getColorPalette(h, s, l, { rel: "analagous" });
  const { primary, secondary, accent, base } = newPalette;
  document?.body.style.setProperty("--primary-color", primary);
  if (secondary) document?.body.style.setProperty("--secondary-color", secondary);
  if (accent) document?.body.style.setProperty("--accent-color", accent);
  if (base) document?.body.style.setProperty("--text-color", base);

  setColors(newPalette);
}

function setColors(palette: ThemePalette) {
  const { primaryColor, secondaryColor, accentColor } = useColors();
  primaryColor.value = palette.primary;
  secondaryColor.value = palette.secondary;
  accentColor.value = palette.accent;
}

function storeValue() {
  if (!localStorage) return;
  localStorage.setItem("ah-color-theme", inputHue.value.toString());
}

function loadValue() {
  if (!localStorage) return;
  const hue = localStorage.getItem("ah-color-theme");
  if (hue === null) return;

  document?.addEventListener("mousemove", () => applyLoadedValue(Number(hue)), {
    once: true,
  });

  document?.addEventListener("touchstart", () => applyLoadedValue(Number(hue)), {
    once: true,
  });
}

function applyLoadedValue(hueValue: number) {
  inputHue.value = Number(hueValue);
  changeColor(inputHue.value);
}

function toggleColorSlider() {
  unclicked.value = false;
  hideColorSlider.value = !hideColorSlider.value;
}

onClickOutside(rootRef, () => (hideColorSlider.value = true));

onMounted(async () => loadValue());
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
