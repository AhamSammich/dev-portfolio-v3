<template>
  <div
    :class="{
      'project-card transition-all duration-700 group relative flex flex-col w-full basis-full sm:basis-[48%] gap-4 overflow-hidden rounded-xl shadow-md': true,
      'max-sm:min-h-[60vh]': expanded,
    }"
    :style="`${expanded ? 'flex-basis: 100%' : ''}`"
  >
    <NuxtImg
      :src="image.url"
      :alt="title"
      width="1280"
      height="0"
      sizes="sm:100vw 50vw"
      class="object-cover"
      preset="screenshot"
      placeholder
    />
    <div
      :class="{
        'absolute z-10 h-full w-full flex flex-col justify-center items-center bg-near-white bg-opacity-95 text-center text-near-black': true,
        'pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity': true,
      }"
      :style="`${
        expanded ? 'opacity: 1; justify-content: flex-start; padding: 2rem;' : ''
      }`"
    >
      <button
        class="absolute top-2 right-2"
        @pointerup="() => (expanded = !expanded)"
        @keyup.enter="() => (expanded = !expanded)"
      >
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
            'z-20 text-center': true,
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
              'mx-auto max-w-[48ch] px-2 lg:text-lg xl:text-xl': true,
            }"
          >
            {{ line }}
          </p>
        </template>
        <p
          v-else
          :class="{
            'mx-auto max-w-[48ch] px-2 lg:text-lg xl:text-xl': true,
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

const { accentColor } = useColors();
</script>

<style scoped lang="postcss">
a .icon {
  color: v-bind(accentColor);
}
</style>
