<template>
  <div
    class="group relative mt-8 flex min-h-[50svh] flex-col gap-4 rounded-xl bg-near-white p-12 shadow-md transition-all"
  >
    <div
      class="absolute inset-x-0 -top-8 mx-auto flex aspect-square w-16 items-center justify-center rounded-full lg:w-20"
      :style="useColorStyle().dark()"
    >
      <Icon :name="iconName" class="mx-auto text-4xl lg:text-5xl" />
    </div>
    <h2 class="text-left text-xl font-bold xl:text-2xl mt-2">{{ headline }}</h2>
    <p
      v-for="(line, index) in splitText"
      :key="index"
      class="max-w-[48ch] text-near-black text-left xl:text-xl"
    >
      {{ line }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconName: string;
  headline: string;
  bodyText: string;
}>();

const splitText = props.bodyText.split("\n");
</script>

<style scoped></style>
