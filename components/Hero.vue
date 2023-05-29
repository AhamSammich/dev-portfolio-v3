<template>
    <section id="hero" class="page flex max-sm:flex-col max-sm:gap-8 items-center justify-center">
        <div class="z-[1] px-8 grid gap-2">
            <p class="hidden">
                <a href="https://storyset.com/data">Data illustrations by Storyset</a>
            </p>
            <h1 class="font-bold text-near-black text-2xl lg:text-4xl">
                <span class="font-normal text-xl lg:text-3xl">My name is </span>
                <span class="block">
                    Andre Hammons
                </span>
            </h1>
            <p class="lg:text-2xl">I am a
                <span class="font-bold">web developer</span>
                <span class="block ml-8">
                    and I am
                    <span class="font-bold">here to help!</span>
                </span>
            </p>
        </div>
        <div class="w-3/4 sm:w-1/3">
            <HeroSvg fill-color="#172554" />
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>