<template>
  <ul
    :class="{
      'flex w-full justify-end gap-[1.5em] py-[0.5em] font-thin text-sm sm:text-lg md:text-xl lg:text-2xl': true,
      'h-max flex-col items-center pb-4': flexCol,
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
      <button @click="() => scrollToSection('#connect')">Connect</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  flexCol?: boolean;
}>();

const { accentColor } = useColors();

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
  padding-top: 1em;
  color: var(--near-black);

  &:not(:first-child) {
    border-top: 1px solid v-bind(accentColor);
  }
}

li:is(:hover, :focus-visible) {
  color: v-bind(accentColor);

  &:not(.flex-col li) {
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
}
</style>
