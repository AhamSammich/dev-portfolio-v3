<template>
    <div
        class="relative w-12 h-12 p-1 bg-near-white bg-opacity-80 rounded-md shadow-md overflow-hidden">
        <Icon :name="iconName" class="w-8 h-8 absolute inset-0 m-auto" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    iconName: string
}>()
</script>

<style scoped></style>