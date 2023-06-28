<template>
  <div
    class="group relative flex flex-col items-center w-full md:w-3/4 mx-auto max-w-[1280px]"
  >
    <div class="buttons">
      <div v-for="(pg, index) in pages" :key="pg">
        <input
          :id="pg"
          :title="pg"
          type="radio"
          :name="id"
          :class="{
            'h-3 w-3 cursor-pointer appearance-none rounded-full opacity-80 shadow-sm': true,
            'active scale-90': index === activePage - 1,
          }"
          @change="$emit('go-to-page', index + 1)"
        />
        <label :for="pg" class="visually-hidden">{{ pg }}</label>
      </div>
    </div>

    <Swipable
      allow-axis="both"
      @swipe-left="() => $emit('next-page')"
      @swipe-right="() => $emit('prev-page')"
    >
      <Transition mode="out-in">
        <slot />
      </Transition>
    </Swipable>

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

const pages = range(numOfPages).map((index) => `${id}-pg${index + 1}`);

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
  color: var(--accent-color);
  z-index: 20;
  pointer-events: none;

  & .icon {
    stroke-width: 0.5px;
    stroke: var(--primary-color);
    pointer-events: auto;
  }
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;

  & input {
    background-color: var(--primary-color);
    border: 0.5px solid var(--secondary-color);
  }
  & input.active {
    background-color: var(--secondary-color);
  }
}

.v-enter-active,
.v-leave-active {
  transition-duration: 300ms;
}

.v-enter-from {
  opacity: 0;
  translate: -5% 0;
}

.v-enter-to {
  opacity: 1;
  translate: 0 0;
}

.v-leave-from {
  opacity: 1;
  translate: 0 0;
}

.v-leave-to {
  opacity: 0;
  translate: 5% 0;
}
</style>
