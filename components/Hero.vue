<template>
  <section
    id="hero"
    class="page flex items-center justify-center max-md:flex-col max-md:gap-8"
  >
    <div class="z-[1] px-8">
      <p class="text-xl sm:text-2xl font-normal lg:text-3xl xl:text-4xl">My name is</p>
      <h1
        class="text-4xl font-bold md:text-5xl xl:text-6xl whitespace-nowrap mb-8 drop-shadow-sm"
      >
        Andre Hammons
      </h1>
      <p class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
        I am a
        <span class="font-bold">web developer</span>
        <span class="ml-28 block">
          and I am
          <span class="font-bold">here to help!</span>
        </span>
      </p>
    </div>
    <div class="w-3/4 md:basis-1/3 lg:basis-1/4">
      <HeroSvg :fill-color="secondaryColor" :accent-color="accentColor" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { secondaryColor, accentColor } = useColors();
</script>

<style scoped lang="postcss">
h1 {
  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 1px;
    width: 120%;
    margin-top: 0.3rem;
    left: -10%;
    background: radial-gradient(circle at 50% 50%, v-bind(accentColor), transparent);
    z-index: -1;
  }
}
</style>
