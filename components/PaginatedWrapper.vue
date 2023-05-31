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
          :class="{
            'h-3 w-3 cursor-pointer appearance-none rounded-full bg-blue-950 opacity-80': true,
            'scale-90 border border-blue-950 bg-transparent': index === activePage - 1,
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
          ...iconClass,
          'pointer-events-none opacity-0': activePage === 1,
        }"
        @pointerdown="$emit('prev-page')"
      />
      <Icon
        name="solar:double-alt-arrow-right-bold-duotone"
        :class="{
          ...iconClass,
          'pointer-events-none opacity-0': activePage === numOfPages,
        }"
        @pointerdown="$emit('next-page')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { numOfPages = 1, activePage = 1 } = defineProps(["numOfPages", "activePage"]);
defineEmits(["prev-page", "next-page", "go-to-page"]);
const iconClass = {
  "cursor-pointer text-4xl drop-shadow-md text-blue-950": true,
};
</script>

<style scoped lang="postcss">
.arrows {
  width: 100%;
  position: absolute;
  top: 25%;
  padding: 0 2rem;
  display: none;

  @media (height < 400px) {
    display: flex;
    justify-content: space-between;
  }
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
