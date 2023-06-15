<template>
  <!-- expand toggle button -->
  <button
    class="absolute z-20 opacity-0 top-2 right-2 text-near-black group-hover:opacity-100"
    @pointerup="() => modalRef?.showModal()"
    @keyup.enter="() => modalRef?.showModal()"
  >
    <Icon name="system-uicons:expand" class="text-2xl" />
    <span class="visually-hidden">Expand Project Card</span>
  </button>

  <dialog
    ref="modalRef"
    class="relative w-full p-8 overflow-x-hidden overflow-y-auto rounded-sm shadow-md sm:w-3/4 h-max"
  >
    <!-- QR code -->
    <SideDrawer v-if="link?.qrCode" class="max-lg:hidden">
      <Icon
        name="ic:twotone-qr-code"
        class="mb-1 text-white text-5xl absolute inset-y-0 my-auto h-full"
      />
      <p class="text-2xl text-center mt-4">Try it out on mobile!</p>
      <img :src="link?.qrCode" class="w-2/3 max-w-[500px] m-auto" />
    </SideDrawer>

    <button
      class="absolute top-2 right-2"
      @pointerup="() => modalRef?.close()"
      @keyup.enter="() => modalRef?.close()"
    >
      <Icon name="system-uicons:close" class="text-3xl" />
      <span class="visually-hidden">Expand Project Card</span>
    </button>
    <div class="flex flex-col items-center justify-center gap-4">
      <h2 class="z-20 text-center">
        {{ title }}
      </h2>

      <!-- project links -->
      <div class="flex gap-8 project-links max-sm:gap-4">
        <!-- live site -->
        <a v-if="link" :href="link.url" target="_blank" title="Visit site" autofocus>
          <Icon
            name="solar:link-bold-duotone"
            class="mb-1 text-2xl lg:text-4xl xl:text-5xl"
          />
          <span> Visit site </span>
        </a>

        <!-- github repository -->
        <a v-if="repo" :href="repo" target="_blank" title="View source code">
          <Icon name="mdi:github" class="mb-1 text-2xl lg:text-4xl xl:text-5xl" />
          <span> View source code </span>
        </a>
      </div>

      <!-- project description -->
      <div v-if="longDescription">
        <!-- show full description while expanded -->
        <p
          v-for="(line, index) in longDescription"
          :key="index"
          class="my-4 mx-auto max-w-[48ch] lg:text-lg xl:text-xl"
        >
          {{ line }}
        </p>
      </div>

      <!-- show single-line description normally -->
      <p v-else class="mx-auto max-w-[48ch] px-4 text-center lg:text-lg xl:text-xl">
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
  link?: {
    url: string;
    qrCode?: string;
  };
  image?: {
    url: string;
    alt?: string;
  };
  tech?: string[];
  repo?: string;
}>();

const modalRef: Ref<HTMLDialogElement | null> = ref(null);
</script>

<style scoped lang="postcss">
a .icon,
.icon.color {
  color: var(--accent-color);
}

dialog {
  &::-webkit-scrollbar {
    width: 0.3rem;
    background-color: var(--secondary-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
  }

  &::backdrop {
    background-color: #222;
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: no-preference) {
  dialog {
    animation: pullUp 0.3s ease-out;
  }

  @keyframes pullUp {
    from {
      opacity: 0;
      translate: 0 5%;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
