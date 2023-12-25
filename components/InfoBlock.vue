<template>
  <div
    class="group relative mt-8 flex min-h-[50svh] flex-col gap-4 p-12 bg-near-white rounded-sm shadow-md transition-all"
  >
    <div
      class="overflow-clip absolute inset-x-0 flex items-center justify-center w-16 mx-auto rounded-full icon-container -top-8 aspect-square lg:w-20"
    >
      <Icon v-if="iconName" :name="iconName" class="mx-auto text-4xl lg:text-5xl" />
      <img v-else-if="imageUrl" :src="imageUrl" class="mx-auto object-cover" />
    </div>
    <h2 class="mt-2 text-xl font-bold text-left xl:text-2xl">{{ headline }}</h2>
    <p
      v-for="(line, index) in splitText"
      :key="index"
      class="max-w-[48ch] text-near-black text-left xl:text-xl"
    >
      {{ line }}
    </p>
    <NuxtLink
      external
      v-if="url"
      :to="url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center bg-secondary-color hover:bg-secondary-color-dark transition-all"
    >
      <Icon name="solar:link-bold-duotone" class="mr-2 text-near-black" />
      {{ url.replace(/https?:\/\/(www\.)?/, "") }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  headline: string;
  bodyText: string;
  url?: string;
  iconName?: string;
  imageUrl?: string;
}>();

const splitText = props.bodyText.split("\n");
</script>

<style scoped lang="postcss">
.icon-container {
  color: var(--near-white);
  background-color: var(--secondary-color);
}
</style>
