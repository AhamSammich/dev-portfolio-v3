<template>
  <section
    id="hero"
    class="flex items-center justify-center page max-sm:flex-col max-sm:gap-8"
  >
    <div class="z-[1] px-8">
      <p class="font-normal text-2xl lg:text-3xl xl:text-4xl">My name is</p>
      <h1
        class="mb-4 text-4xl font-bold md:text-5xl xl:text-6xl whitespace-nowrap drop-shadow-sm"
      >
        Andre Hammons
      </h1>
      <p class="text-right text-2xl lg:text-3xl xl:text-4xl">
        and I am a
        <span class="font-bold">Software Developer</span>
      </p>
    </div>
    <div class="z-10 w-3/4 max-w-[300px] lg:max-w-[400px] xl:max-w-[500px]">
      <HeroSvg />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
    background: radial-gradient(circle at 50% 50%, var(--accent-color), transparent);
    z-index: -1;
  }
}
</style>
