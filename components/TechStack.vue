<template>
    <div class="w-max h-max">
        <h2 v-if="title" class="text-2xl font-bold mb-2">{{ title }}</h2>
        <div class="flex gap-4 w-full h-[100px]">
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