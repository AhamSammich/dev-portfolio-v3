<template>
  <section
    id="hero"
    class="page flex items-center justify-center max-sm:flex-col max-sm:gap-8"
  >
    <div class="z-[1] px-8">
      <p class="hidden">
        <a href="https://storyset.com/data">Data illustrations by Storyset</a>
      </p>
      <p class="text-xl sm:text-2xl font-normal lg:text-3xl xl:text-4xl">My name is</p>
      <h1
        class="text-4xl font-bold lg:text-4xl xl:text-6xl whitespace-nowrap mb-2 drop-shadow-md"
      >
        Andre Hammons
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
      <HeroSvg :fill-color="secondaryColor" :accent-color="accentColor" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { secondaryColor, accentColor } = useColors();
</script>

<style scoped lang="postcss">
h1 {
  color: v-bind(accentColor);
}
</style>
