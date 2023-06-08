<template>
  <div
    class="project-card group relative w-full overflow-hidden rounded-sm shadow-md gap-4 basis-full flex flex-col sm:basis-[48%]"
  >
    <!-- project image -->
    <NuxtImg
      v-if="image"
      :src="image.url"
      :alt="title"
      width="1800"
      height="860"
      sizes="xs:100vw sm:50vw md:50vw lg:50vw xl:50vw"
      class="object-cover"
      preset="screenshot"
      loading="lazy"
      placeholder
    />

    <!-- no project image -->
    <Icon
      v-else
      name="mdi:github-box"
      class="img-placeholder w-[48%] h-full p-[10%] mx-auto"
    />

    <LazyProjectModal
      :title="title"
      :description="description"
      :long-description="longDescription"
      :image="image"
      :link="link"
      :tech="tech"
      :repo="repo"
    />

    <!-- project info overlay -->
    <div
      class="absolute z-10 flex flex-col items-center justify-center w-full h-full transition-opacity opacity-0 pointer-events-none bg-near-white bg-opacity-95 text-near-black group-hover:pointer-events-auto group-hover:opacity-100 focus-within:opacity-100"
    >
      <!-- project details -->
      <div class="flex flex-col items-center justify-center gap-4">
        <h2 class="z-20 text-center">
          {{ title }}
        </h2>

        <!-- project links -->
        <div class="flex gap-8 project-links max-sm:gap-4">
          <!-- live site -->
          <a v-if="link" :href="link" target="_blank" title="Visit site">
            <Icon
              name="solar:link-bold-duotone"
              class="mb-1 text-2xl lg:text-4xl xl:text-5xl"
            />
            <span class="visually-hidden"> Visit site </span>
          </a>

          <!-- github repository -->
          <a v-if="repo" :href="repo" target="_blank" title="View source code">
            <Icon name="mdi:github" class="mb-1 text-2xl lg:text-4xl xl:text-5xl" />
            <span class="visually-hidden"> View source code </span>
          </a>
        </div>

        <!-- project description -->
        <p class="mx-auto max-w-[48ch] px-4 text-center lg:text-lg xl:text-xl">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  longDescription?: string[];
  link?: string;
  image?: {
    url: string;
    alt?: string;
  };
  tech?: string[];
  repo?: string;
}>();
</script>

<style scoped lang="postcss">
.project-card:not(:has(img)) {
  box-shadow: none;
  background-color: var(--near-black);
}

.img-placeholder {
  color: var(--primary-color);
}

a .icon {
  color: var(--accent-color);
}
</style>
