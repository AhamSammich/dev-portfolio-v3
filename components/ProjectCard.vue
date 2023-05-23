<template>
    <div class="project-card flex w-1/2 min-w-max flex-col gap-4 p-8">
        <img :src="image.src" alt="Project Image" width="300" height="150" class="mx-auto" />
        <div>
            <h2 class="text-2xl font-bold">{{ title }}</h2>
            <p class="text-xl w-[45ch]">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    title: string
    description: string
    image: {
        src: string
        alt: string
    }
}>(), {
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem eveniet quasi dolor laborum, delectus sapiente officia qui ipsam consequatur dolorum perspiciatis?",
    image: {
        src: "https://a-us.storyblok.com/f/1014509/1002x1004/bb1b48b4d5/alh-logo-web.png",
        alt: "Project Image"
    },
})
</script>

<style scoped></style>