<template>
  <button @click="() => modalRef?.showModal()">My Resume</button>
  <ClientOnly>
    <dialog
      ref="modalRef"
      class="rounded-xl w-full md:w-3/4 h-full max-h-[100svh] relative overflow-hidden bg-transparent backdrop:bg-near-black backdrop:opacity-90"
    >
      <div class="flex flex-col items-center justify-center h-full my-4 rounded-xl">
        <iframe autofocus :src="resumeUrl" class="w-full h-[80%]"> </iframe>
        <button
          type="button"
          title="Close"
          @pointerup="() => modalRef?.close()"
          @keyup.enter="() => modalRef?.close()"
        >
          Close
        </button>
      </div>
    </dialog>
  </ClientOnly>
</template>

<script setup lang="ts">
const modalRef: Ref<HTMLDialogElement | null> = ref(null);
const { secondaryColor, accentColor } = useColors();
const resumeUrl =
  "https://a-us.storyblok.com/f/1014509/x/c6a4c4da4a/resume-2023-development.pdf";
</script>

<style scoped lang="postcss">
button {
  background-color: v-bind(secondaryColor);
  color: var(--near-white);
  margin: 1rem;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-radius: 0.75rem;

  &:is(:hover, :focus-visible) {
    background-color: v-bind(accentColor);
    scale: 1.05;
  }
}
</style>
