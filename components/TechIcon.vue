<template>
  <div
    :data-name="label || iconName.toUpperCase()"
    class="relative w-12 m-4 icon-box aspect-square sm:w-16 lg:w-20"
  >
    <Icon :name="iconName" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconName: string;
  label?: string;
}>();
</script>

<style scoped lang="postcss">
.icon-box::after {
  content: attr(data-name);
  display: block;
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top: 0.5em;
  transform: translateX(-50%);
  width: max-content;
  height: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;
  font-family: Consolas, monospace, system-ui;
  font-size: smaller;
}
</style>
