<template>
  <div class="group relative flex flex-col items-center w-full">
    <div class="buttons">
      <div v-for="(pg, index) in pages" :key="pg">
        <input
          :id="pg"
          :title="pg"
          type="radio"
          :name="id"
          :style="useColorStyle().secondary()"
          :class="{
            'h-3 w-3 cursor-pointer appearance-none rounded-full opacity-80': true,
            'scale-75': index === activePage - 1,
          }"
          @change="$emit('go-to-page', index + 1)"
        />
        <label :for="pg" class="visually-hidden">{{ pg }}</label>
      </div>
    </div>
    <slot />
    <div class="arrows">
      <button :class="{ 'invisible pointer-events-none opacity-0': activePage === 1 }">
        <Icon
          name="solar:double-alt-arrow-left-bold-duotone"
          :class="arrowClass"
          @pointerdown="$emit('prev-page')"
        />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        :class="{ 'invisible pointer-events-none opacity-0': activePage === numOfPages }"
      >
        <Icon
          name="solar:double-alt-arrow-right-bold-duotone"
          :class="arrowClass"
          @pointerdown="$emit('next-page')"
        />
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id, numOfPages = 1, activePage = 1 } = defineProps([
  "id",
  "numOfPages",
  "activePage",
]);
defineEmits(["prev-page", "next-page", "go-to-page"]);

const pages = [...Array(numOfPages)].map((_, index) => `${id}-pg${index + 1}`);

const accentColor = computed(() => useAccentColor().value);
const arrowClass = {
  "text-5xl lg:text-7xl drop-shadow-sm": true,
};
</script>

<style scoped lang="postcss">
.arrows {
  width: 75%;
  position: absolute;
  top: 1rem;
  padding: 0 2rem;
  display: none;
  display: flex;
  justify-content: space-between;
  color: v-bind(accentColor);
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
