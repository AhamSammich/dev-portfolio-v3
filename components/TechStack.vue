<template>
  <div class="w-full h-max">
    <h2 v-if="title" class="my-2 text-lg font-bold lg:text-xl">
      {{ title }}
    </h2>
    <div class="flex gap-8 flex-wrap justify-center">
      <TechIcon
        v-for="tech in stack"
        :key="tech"
        :iconName="tech"
        class="flex-shrink-0"
      />
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
