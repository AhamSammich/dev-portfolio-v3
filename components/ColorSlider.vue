<template>
  <div ref="slideRef" class="flex flex-col gap-4">
    <label class="visually-hidden">Change Color:</label>
    <input
      v-model="inputHue"
      type="range"
      min="0"
      max="360"
      class="appearance-none bg-transparent"
      @change="emitColor"
    />
  </div>
</template>

<script setup lang="ts">
const slideRef: Ref<HTMLElement | null> = ref(null);
const inputHue = ref(226);

const emits = defineEmits(["color-change"]);

function emitColor() {
  emits("color-change", {
    hue: inputHue.value,
  });
}

onMounted(() => {
  // const main = document.querySelector("main");
  // main?.addEventListener("scroll", () => {
  //   inputHue.value = Math.round(normalize(main.scrollTop, main.scrollHeight) * 360);
  //   emitColor();
  // });

  watchEffect(() => {
    slideRef.value?.style.setProperty(
      "background-color",
      `hsl(${inputHue.value} 100% 50%)`
    );
  });
});
</script>

<style scoped></style>
