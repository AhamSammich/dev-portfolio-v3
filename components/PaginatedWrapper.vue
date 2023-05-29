<template>
    <div class="group relative flex items-center h-screen">
        <Icon name="solar:double-alt-arrow-left-bold-duotone" class="group-hover:animate-pulse cursor-pointer absolute inset-y-0 left-0 my-auto text-4xl z-10 drop-shadow-md text-blue-950" @pointerdown="$emit('prev-page')" />
        <Icon name="solar:double-alt-arrow-right-bold-duotone" class="group-hover:animate-pulse cursor-pointer absolute inset-y-0 right-0 my-auto text-4xl z-10 drop-shadow-md text-blue-950" @pointerdown="$emit('next-page')" />
        <slot />
    </div>
</template>

<script setup lang="ts">
defineEmits(['prev-page', 'next-page'])
</script>

<style scoped></style>