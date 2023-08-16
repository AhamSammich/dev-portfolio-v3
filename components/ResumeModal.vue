<template>
  <button class="shadow-md" @click="() => modalRef?.showModal()">My Resume</button>
  <ClientOnly>
    <teleport to="body">
      <dialog
        ref="modalRef"
        class="w-full md:w-3/4 h-full max-h-[100svh] relative overflow-visible bg-transparent backdrop:bg-near-black backdrop:opacity-90"
      >
        <div class="flex flex-col items-center justify-center h-full my-4 rounded-sm">
          <iframe
            autofocus
            :src="resumeUrl"
            class="w-screen sm:w-full h-[80%]"
            allow="fullscreen"
          >
          </iframe>
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
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
const modalRef: Ref<HTMLDialogElement | null> = ref(null);
const resumeUrl =
  "https://a-us.storyblok.com/f/1014509/x/2a8128b09d/andre_hammons_resume.pdf";
</script>

<style scoped lang="postcss">
button {
  background-color: var(--accent-color);
  color: var(--near-white);
  margin: 1rem;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-radius: 0.125rem;

  &:is(:hover, :focus-visible) {
    background-color: var(--accent-color);
    scale: 1.05;
  }
}

dialog[open] > * {
  animation: fadeIn 500ms ease-out;
}
</style>
