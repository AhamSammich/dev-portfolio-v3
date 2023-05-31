<template>
  <div
    :class="{
      'project-card transition-all duration-700 group relative flex flex-col w-full basis-full sm:basis-[48%] gap-4 overflow-hidden rounded-xl shadow-md': true,
      'max-sm:min-h-[60vh]': expanded,
    }"
    :style="`${expanded ? 'flex-basis: 100%' : ''}`"
  >
    <img
      :src="image.url"
      alt="Project Image"
      width="1850"
      height="885"
      class="object-cover"
    />
    <div
      :class="{
        'absolute z-10 h-full w-full flex flex-col justify-center items-center bg-near-white bg-opacity-95 text-center text-near-black': true,
        'pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity': true,
      }"
      :style="`${
        expanded ? 'opacity: 1; justify-content: flex-start; padding: 2rem;' : ''
      }`"
    >
      <button class="absolute top-2 right-2" @pointerdown="() => (expanded = !expanded)">
        <template v-if="expanded">
          <Icon name="system-uicons:close" class="text-5xl" />
          <span class="visually-hidden">Close Project Card</span>
        </template>
        <template v-else>
          <Icon name="system-uicons:expand" class="text-3xl" />
          <span class="visually-hidden">Expand Project Card</span>
        </template>
      </button>
      <div class="flex flex-col items-center justify-center gap-4">
        <h2
          :class="{
            'z-20 text-center font-bold': true,
            'text-xl md:text-2xl xl:text-4xl': expanded,
          }"
        >
          {{ title }}
        </h2>
        <div class="project-links flex gap-8">
          <a :href="link" target="_blank" title="Visit site">
            <Icon
              name="solar:link-bold-duotone"
              :class="{ 'text-2xl lg:text-4xl mb-1': true }"
            />
            <span :class="{ 'visually-hidden': !expanded }"> Visit site </span>
          </a>
          <a v-if="repo" :href="link" target="_blank" title="View source code">
            <Icon name="mdi:github" :class="{ 'text-2xl lg:text-4xl mb-1': true }" />
            <span :class="{ 'visually-hidden': !expanded }"> View source code </span>
          </a>
        </div>
        <template v-if="longDescription && expanded">
          <p
            v-for="(line, index) in longDescription"
            :key="index"
            :class="{
              'mx-auto max-w-[48ch] px-2 text-sm font-thin': true,
              'max-sm:text-sm lg:text-lg': expanded,
            }"
          >
            {{ line }}
          </p>
        </template>
        <p
          v-else
          :class="{
            'mx-auto max-w-[48ch] px-2 text-sm font-thin': true,
            'max-sm:text-sm lg:text-lg': expanded,
          }"
        >
          {{ description }}
        </p>
      </div>
      <div
        v-show="expanded"
        :class="{ 'py-4 transition-transform origin-top': true, 'scale-y-0': !expanded }"
      >
        <TechStack v-if="tech" :stack="tech" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  longDescription?: string[];
  link: string;
  image: {
    url: string;
    alt?: string;
  };
  tech?: string[];
  repo?: string;
}>();

const expanded = ref(false);
</script>

<style scoped lang="postcss"></style>
