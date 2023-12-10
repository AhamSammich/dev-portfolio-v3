<template>
  <div
    class="project-card group relative w-full max-w-[640px] overflow-hidden rounded-sm shadow-md gap-4 basis-full flex flex-col lg:basis-[48%]"
  >
    <!-- project image -->
    <NuxtImg
      v-if="image"
      :src="image.url"
      :alt="title"
      width="1800"
      height="860"
      sizes="xs:100vw sm:100vw md:640px lg:640px xl:640px"
      class="object-cover"
      preset="screenshot"
      loading="lazy"
      placeholder
    />

    <!-- no project image -->
    <Icon
      v-else
      name="mdi:github-box"
      class="img-placeholder w-[40%] h-max px-[10%] py-[4%] mx-auto"
    />

    <!-- project info overlay -->
    <div
      class="absolute z-10 flex flex-col items-center justify-center w-full h-full transition-opacity opacity-0 pointer-events-none bg-near-white bg-opacity-95 text-near-black group-hover:pointer-events-auto group-hover:opacity-100 focus-within:opacity-100"
    >
      <!-- open project details button -->
      <button
        class="absolute z-20 opacity-0 top-2 right-2 text-near-black group-hover:opacity-100 group-focus-within:opacity-100"
        @pointerup="() => $emit('open-details', title)"
        @keyup.enter="() => $emit('open-details', title)"
      >
        <Icon name="system-uicons:expand" class="text-2xl" />
        <span class="visually-hidden">Expand Project Card</span>
      </button>

      <!-- project details -->
      <div class="flex flex-col items-center justify-center gap-4">
        <h2 class="z-20 text-center">
          {{ title }}
        </h2>

        <!-- project links -->
        <div class="flex gap-8 project-links max-sm:gap-4">
          <!-- live site -->
          <a v-if="link" :href="link.url" target="_blank" title="Visit site">
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
defineProps(["title", "description", "image", "link", "repo"]) as Project;

defineEmits(["open-details"]);
</script>

<style scoped lang="postcss">
.project-card:not(:has(img)) {
  background-color: var(--near-black);
}

.img-placeholder {
  color: var(--primary-color);
}

a .icon {
  color: var(--accent-color);
}
</style>
