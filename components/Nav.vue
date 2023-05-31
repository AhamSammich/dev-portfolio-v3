<script setup lang="ts">
defineProps<{
  flexCol?: boolean;
}>();
</script>
<template>
  <ul
    :class="{
      'flex w-full justify-end gap-[1.5em] py-[0.5em] font-thin drop-shadow-lg text-sm sm:text-lg md:text-xl lg:text-2xl': true,
      'h-max flex-col items-center pb-4': flexCol,
    }"
  >
    <li>
      <a href="#skills"> Skills </a>
    </li>
    <li>
      <a href="#projects"> Projects </a>
    </li>
    <li>
      <a href="#about"> About </a>
    </li>
    <li>
      <a href="#connect"> Connect </a>
    </li>
  </ul>
</template>
