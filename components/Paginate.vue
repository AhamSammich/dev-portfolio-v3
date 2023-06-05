<template>
  <div class="group content relative flex flex-col items-center w-full md:w-3/4 mx-auto">
    <div class="buttons">
      <div v-for="(pg, index) in pages" :key="pg">
        <input
          :id="pg"
          :title="pg"
          type="radio"
          :name="id"
          :class="{
            'h-3 w-3 cursor-pointer appearance-none rounded-full opacity-80 shadow-sm': true,
            'active scale-75': index === activePage - 1,
          }"
          :style="{
            backgroundColor: index === activePage - 1 ? accentColor : secondaryColor,
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

const { accentColor, secondaryColor } = useColors();
const arrowClass = {
  "text-5xl lg:text-7xl drop-shadow-md hover:scale-105 focus-visible:scale-105": true,
};
</script>

<style scoped lang="postcss">
.arrows {
  width: 100%;
  position: absolute;
  top: 40vh;
  display: flex;
  justify-content: space-between;
  color: v-bind(secondaryColor);
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
</style>
