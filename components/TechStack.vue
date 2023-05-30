<template>
    <div class="w-max h-max m-2">
        <h2 v-if="title" class="text-center text-xl lg:text-2xl font-bold mb-2">{{ title }}</h2>
        <div class="flex gap-2 sm:gap-4 w-full">
            <TechIcon v-for="tech in stack" :key="tech" :iconName="tech" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    stack: string[]
}>();
</script>

<style scoped></style>