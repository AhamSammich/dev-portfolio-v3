<template>
    <div
        class="relative w-16 h-16 p-1 bg-near-black bg-opacity-80 rounded-md shadow-md overflow-hidden">
        <Icon :name="iconName" class="w-12 h-12 absolute inset-0 m-auto" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    iconName: string
}>()
</script>

<style scoped></style>