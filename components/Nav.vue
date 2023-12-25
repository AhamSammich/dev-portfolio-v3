<template>
  <ul
    :class="{
      'flex w-full items-center justify-end gap-3 sm:gap-[1.5em] py-[0.5em] font-thin text-sm sm:text-lg md:text-xl lg:text-2xl': true,
      'h-max flex-col pb-4': flexCol,
    }"
  >
    <li>
      <button @click="() => scrollToSection('#skills')">
        <Icon name="solar:code-2-line-duotone" class="w-5 h-5" />
        <span class="max-[400px]:sr-only">Skills</span>
      </button>
    </li>
    <li>
      <button @click="() => scrollToSection('#experience')">
        <Icon name="mdi:briefcase-variant" class="w-5 h-5" />
        <span class="max-[400px]:sr-only">Experience</span>
      </button>
    </li>
    <li>
      <button @click="() => scrollToSection('#projects')">
        <Icon name="icon-park-outline:folder-code-one" class="w-5 h-5" />
        <span class="max-[400px]:sr-only">Projects</span>
      </button>
    </li>
    <li>
      <button @click="() => scrollToSection('#about')">
        <Icon name="mdi:account-circle-outline" class="w-5 h-5" />
        <span class="max-[400px]:sr-only">About</span>
      </button>
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
