<template>
  <dialog
    ref="modalRef"
    class="relative w-full p-12 overflow-x-hidden overflow-y-auto rounded-sm shadow-md sm:w-2/3 h-max"
  >
    <!-- QR code -->
    <LazySideDrawer v-if="link?.qrCode">
      <Icon
        name="ic:twotone-qr-code"
        class="absolute inset-y-0 h-full my-auto text-5xl text-white"
      />
      <p class="my-4 text-2xl text-center">Try it out on mobile!</p>
      <img
        :src="link.qrCode"
        :alt="`QR code link to ${link.url}`"
        class="w-2/3 aspect-square mx-auto"
        width="500"
        height="500"
        loading="lazy"
        object-fit="contain"
      />
    </LazySideDrawer>

    <!-- close button -->
    <button
      class="absolute top-0 right-0"
      @pointerup="closeModal"
      @keyup.enter="closeModal"
    >
      <Icon name="system-uicons:close" class="text-5xl" />
      <span class="visually-hidden">Expand Project Card</span>
    </button>
    <div class="flex flex-col items-start max-w-[600px] mx-auto justify-center gap-2">
      <h2 class="mb-4">
        {{ title }}
      </h2>

      <!-- project links -->
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

      <!-- project description -->
      <div v-if="longDescription" class="my-2">
        <!-- show full description while expanded -->
        <p
          v-for="(line, index) in longDescription"
          :key="index"
          class="my-2 mx-auto max-w-[48ch] lg:text-lg xl:text-xl"
        >
          {{ line }}
        </p>
      </div>

      <!-- show single-line description normally -->
      <div v-else class="w-full">
        <p class="max-w-[48ch] lg:text-lg xl:text-xl">
          {{ description }}
        </p>
      </div>

      <!-- show applicable skill icons when expanded -->
      <div class="origin-left scale-75">
        <TechStack v-if="tech" :stack="tech" />
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
interface ProjectModal extends Project {
  showModal: boolean;
}
const props = defineProps([
  "showModal",
  "title",
  "description",
  "longDescription",
  "link",
  "repo",
  "tech",
]) as ProjectModal;

const emits = defineEmits(["close-modal"]);

const modalRef: Ref<HTMLDialogElement | null> = ref(null);

function closeModal() {
  modalRef.value?.close();
  emits("close-modal");
}

onMounted(() => {
  console.log("modal mounted");
  watchEffect(() => {
    props.showModal ? modalRef.value?.showModal() : modalRef.value?.close();
  });
});
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

/* hide QR code drawer on mobile devices */
@media (width < 1024px) or (height < 500px) {
  .drawer {
    display: none;
  }
}
</style>
