<script setup lang="ts">
defineProps<{
    flexCol?: boolean;
}>();

</script>
<template>
    <ul :class="{
        'w-full flex justify-end gap-[1em] py-[0.5em] sm:text-lg md:text-xl lg:text-2xl font-thin drop-shadow-lg': true,
        'flex-col h-max pb-4 items-center': flexCol,
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