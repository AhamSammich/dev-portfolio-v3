<template>
  <a :href="url" target="_blank" :title="label">
    <Icon
      v-if="iconName"
      :name="iconName"
      class="text-[1.5em] mb-1 mr-2 drop-shadow-sm"
    />
    <span :class="{ 'visually-hidden': hideLabel }">
      {{ label }}
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string;
  label: string;
  iconName?: string;
  hideLabel?: boolean;
}>();
</script>

<style scoped></style>
