<script setup lang="ts">
defineProps<{
    flexCol?: boolean;
}>();

</script>
<template>
    <ul :class="{
        'w-full flex justify-around px-8 py-[0.5em] sm:text-lg md:text-2xl xl:text-4xl font-thin drop-shadow-lg': true,
        'flex-col gap-[1em] h-max pb-4 items-center': flexCol,
    }">
        <li>
            <a href="#about">
                About
            </a>
        </li>
        <li>
            <a href="#projects">
                Projects
            </a>
        </li>
        <li>
            <a href="#contact">
                Contact
            </a>
        </li>
    </ul>
</template>