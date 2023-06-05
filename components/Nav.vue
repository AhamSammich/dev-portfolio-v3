<template>
  <ul
    :class="{
      'flex w-full items-center justify-end gap-[1.5em] py-[0.5em] font-thin text-sm sm:text-lg md:text-xl lg:text-2xl': true,
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
        class="rounded-sm px-4 py-2 shadow-md font-bold"
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

const { accentColor, secondaryColor } = useColors();

const scrollToSection = (selector: string) => {
  if (!document) return;
  document.querySelector(selector)?.scrollIntoView({ block: "start" });
};

const buttonColor = computed(() =>
  isDarkColor(secondaryColor.value) ? "var(--near-white)" : "var(--near-black)"
);
</script>

<style scoped lang="postcss">
.flex-col li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-bottom: 1em;
  color: var(--near-black);

  &:not(:last-child) {
    border-bottom: 1px solid v-bind(secondaryColor);
  }

  &:is(:hover, :focus-visible) {
    color: v-bind(accentColor);
    border-color: v-bind(accentColor);
  }
}

li {
  &:not(.flex-col li) {
    border-bottom: 1px solid transparent;

    &:is(:hover, :focus-visible) {
      border-color: v-bind(accentColor);

      &:not(:last-child) {
        color: v-bind(accentColor);
      }
    }
  }
}

li:last-child button {
  background-color: v-bind(accentColor);
  color: v-bind(buttonColor);

  &:is(:hover, :focus-visible) {
    scale: 1.05;
  }
}
</style>
