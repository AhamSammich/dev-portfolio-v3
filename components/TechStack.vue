<template>
  <div class="m-2 h-max w-full">
    <h2 v-if="title" class="my-2 text-xl lg:text-2xl font-bold">
      {{ title }}
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
      <TechIcon v-for="tech in stack" :key="tech" :iconName="tech" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  stack: string[];
}>();

const { primaryColor } = useColors();
</script>

<style scoped lang="postcss">
h2 {
  color: v-bind(primaryColor);
  border-bottom: 1px solid v-bind(primaryColor);
}
</style>
