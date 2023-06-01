<template>
  <section
    id="hero"
    class="page flex items-center justify-center max-sm:flex-col max-sm:gap-8"
  >
    <div class="z-[1] grid gap-2 px-8">
      <p class="hidden">
        <a href="https://storyset.com/data">Data illustrations by Storyset</a>
      </p>
      <h1 class="text-4xl font-bold lg:text-4xl xl:text-6xl">
        <span class="text-xl sm:text-2xl font-normal lg:text-3xl xl:text-4xl"
          >My name is
        </span>
        <span
          class="block whitespace-nowrap"
          :style="{ color: useSecondaryColor().value }"
        >
          Andre Hammons
        </span>
      </h1>
      <p class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
        I am a
        <span class="font-bold">web developer</span>
        <span class="ml-8 lg:ml-16 xl:ml-24 block">
          and I am
          <span class="font-bold">here to help!</span>
        </span>
      </p>
    </div>
    <div class="w-3/4 sm:w-1/3">
      <HeroSvg :fill-color="fillColor" />
    </div>
  </section>
</template>

<script setup lang="ts">
const fillColor = useAccentColor();
</script>

<style scoped></style>
