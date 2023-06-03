<template>
  <div class="m-2 h-max w-max">
    <h2 v-if="title" class="my-2 text-xl lg:text-2xl font-bold">
      {{ title }}
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
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

<style scoped></style>
