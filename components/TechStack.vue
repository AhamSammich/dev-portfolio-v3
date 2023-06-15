<template>
  <div class="w-full h-max">
    <h2 v-if="title" class="my-2 text-xl font-bold lg:text-2xl">
      {{ title }}
    </h2>
    <div class="grid grid-cols-2 gap-8 min-[400px]:grid-cols-4">
      <TechIcon v-for="tech in stack" :key="tech" :iconName="tech" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  stack: string[];
}>();
</script>

<style scoped lang="postcss">
h2 {
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}
</style>
