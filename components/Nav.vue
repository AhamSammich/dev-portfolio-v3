<template>
  <ul
    :class="{
      'flex w-full items-center justify-end gap-3 sm:gap-[1.5em] py-[0.5em] font-thin text-sm sm:text-lg md:text-xl lg:text-2xl': true,
      'h-max flex-col pb-4': flexCol,
    }"
  >
    <li>
      <button @click="() => scrollToSection('#skills')">Skills</button>
    </li>
    <li>
      <button @click="() => scrollToSection('#projects')">Projects</button>
    </li>
    <li>
      <button @click="() => scrollToSection('#about')">About</button>
    </li>
    <li>
      <button
        class="rounded-sm px-2 py-1 shadow-md font-bold"
        @click="() => scrollToSection('#connect')"
      >
        Connect
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  flexCol?: boolean;
}>();

const scrollToSection = (selector: string) => {
  if (!document) return;
  document.querySelector(selector)?.scrollIntoView({ block: "start" });
};
</script>

<style scoped lang="postcss">
.flex-col li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-bottom: 1em;

  &:not(:last-child) {
    border-bottom: 1px solid var(--secondary-color);
  }

  &:is(:hover, :focus-visible) {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
}

li {
  color: var(--text-color);
  &:not(.flex-col li) {
    border-bottom: 1px solid transparent;

    &:is(:hover, :focus-visible) {
      border-color: var(--accent-color);

      &:not(:last-child) {
        color: var(--accent-color);
      }
    }
  }
}

li:last-child button {
  background-color: var(--accent-color);
  color: var(--near-white);
  transition: background-color 0.5s;

  &:is(:hover, :focus-visible) {
    scale: 1.05;
  }
}
</style>
