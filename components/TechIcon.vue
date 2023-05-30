<template>
    <div :data-name="iconName.toUpperCase()"
        class="icon-box relative w-16 sm:w-20 aspect-square p-1 bg-blue-950 text-near-white rounded-xl shadow-md">
        <Icon :name="iconName" class="w-8 sm:w-12 h-8 sm:h-12 absolute inset-0 m-auto" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    iconName: string
}>()
</script>

<style scoped lang="postcss">
.icon-box::after {
    content: attr(data-name);
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    height: 100%;
    text-align: center;
    color: lightsteelblue;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
    font-family: Consolas, monospace, system-ui;
    font-size: smaller;
}

.icon-box:hover::after {
    color: #333;
    opacity: 1;
}
</style>