<template>
  <!-- expand toggle button -->
  <button
    class="absolute top-2 right-2 z-20 text-near-black opacity-0 group-hover:opacity-100"
    @pointerup="() => modalRef?.showModal()"
    @keyup.enter="() => modalRef?.showModal()"
  >
    <Icon name="system-uicons:expand" class="text-3xl" />
    <span class="visually-hidden">Expand Project Card</span>
  </button>

  <dialog
    ref="modalRef"
    class="w-full sm:w-3/4 h-[90svh] sm:h-[60vh] p-8 relative overflow-hidden rounded-sm shadow-md"
  >
    <button
      class="absolute top-2 right-2"
      @pointerup="() => modalRef?.close()"
      @keyup.enter="() => modalRef?.close()"
    >
      <Icon name="system-uicons:close" class="text-3xl" />
      <span class="visually-hidden">Expand Project Card</span>
    </button>
    <div class="flex flex-col items-center justify-center gap-4">
      <h2
        :class="{
          'z-20 text-center': true,
        }"
      >
        {{ title }}
      </h2>

      <!-- project links -->
      <div
        :class="{
          'project-links flex max-sm:gap-4 gap-8': true,
        }"
      >
        <!-- live site -->
        <a v-if="link" :href="link" target="_blank" title="Visit site" autofocus>
          <Icon
            name="solar:link-bold-duotone"
            :class="{ 'text-2xl lg:text-4xl xl:text-5xl mb-1': true }"
          />
          <span> Visit site </span>
        </a>

        <!-- github repository -->
        <a v-if="repo" :href="repo" target="_blank" title="View source code">
          <Icon
            name="mdi:github"
            :class="{ 'text-2xl lg:text-4xl xl:text-5xl mb-1': true }"
          />
          <span> View source code </span>
        </a>
      </div>

      <!-- project description -->
      <div v-if="longDescription">
        <!-- show full description while expanded -->
        <p
          v-for="(line, index) in longDescription"
          :key="index"
          :class="{
            'my-4 mx-auto max-w-[48ch] lg:text-lg xl:text-xl': true,
          }"
        >
          {{ line }}
        </p>
      </div>

      <!-- show single-line description normally -->
      <p
        v-else
        :class="{
          'mx-auto max-w-[48ch] px-4 text-center lg:text-lg xl:text-xl': true,
        }"
      >
        {{ description }}
      </p>

      <!-- show applicable skill icons when expanded -->
      <div class="py-4 origin-top scale-75">
        <TechStack v-if="tech" :stack="tech" />
      </div>
    </div>
  </dialog>
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

const modalRef: Ref<HTMLDialogElement | null> = ref(null);

const { accentColor } = useColors();
</script>

<style scoped lang="postcss">
a .icon {
  color: v-bind(accentColor);
}

@media (prefers-reduced-motion: no-preference) {
  dialog {
    animation: pullUp 0.3s ease-out;
  }

  @keyframes pullUp {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
