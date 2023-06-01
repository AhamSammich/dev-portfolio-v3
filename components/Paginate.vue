<template>
  <div
    class="group relative flex min-h-[80svh] w-full flex-col items-center justify-between gap-4"
  >
    <slot />
    <div class="buttons">
      <div v-for="(_, index) in Array(numOfPages)" :key="index">
        <input
          type="radio"
          name="page"
          :style="useColorStyle().secondary()"
          :class="{
            'h-3 w-3 cursor-pointer appearance-none rounded-full border opacity-80': true,
            'scale-75': index === activePage - 1,
          }"
          @pointerdown="() => $emit('go-to-page', index + 1)"
        />
        <label class="visually-hidden">Page {{ index + 1 }}</label>
      </div>
    </div>
    <div class="arrows">
      <Icon
        name="solar:double-alt-arrow-left-bold-duotone"
        :class="{
          ...arrowClass,
          'pointer-events-none opacity-0': activePage === 1,
        }"
        :style="arrowStyle"
        @pointerdown="$emit('prev-page')"
      />
      <Icon
        name="solar:double-alt-arrow-right-bold-duotone"
        :class="{
          ...arrowClass,
          'pointer-events-none opacity-0': activePage === numOfPages,
        }"
        :style="arrowStyle"
        @pointerdown="$emit('next-page')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { numOfPages = 1, activePage = 1 } = defineProps(["numOfPages", "activePage"]);
defineEmits(["prev-page", "next-page", "go-to-page"]);

const arrowStyle = computed(() => ({ color: useAccentColor().value }));
const arrowClass = {
  "cursor-pointer text-5xl drop-shadow-md": true,
};
const inputStyle = computed(() => useColorStyle().secondary());
</script>

<style scoped lang="postcss">
.arrows {
  width: 100%;
  position: absolute;
  top: 25%;
  padding: 0 2rem;
  display: none;
  display: flex;
  justify-content: space-between;
}

.buttons {
  display: none;

  @media (min-height: 400px) {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
