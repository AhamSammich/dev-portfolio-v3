<template>
    <div class="project-card group flex w-full flex-col gap-4 relative rounded-sm overflow-hidden">
        <img :src="image.url" alt="Project Image" width="1850" height="885" class="object-cover" />
        <div
            class="z-10 absolute flex flex-col justify-center items-center gap-4 w-full h-full bg-blue-950 bg-opacity-80 text-white text-center opacity-0 transition-opacity group-hover:opacity-100">
            <h2 class="z-20 text-center font-bold group-hover:text-white">{{ title }}</h2>
            <p class="font-thin text-sm max-w-[48ch] mx-auto px-2">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    description: string
    link: string,
    image: {
        url: string
        alt?: string
    }
}>()
</script>

<style scoped></style>