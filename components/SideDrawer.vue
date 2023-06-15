<template>
  <div
    ref="drawerRef"
    :class="{
      'drawer absolute inset-0 w-full h-full overflow-hidden transition-colors': true,
      isOpen,
    }"
  >
    <div ref="wrapperRef" class="transition-all shadow-md slot-wrapper">
      <slot />
    </div>
    <button
      class="absolute inset-y-0 my-auto right-0 text-4xl w-12 h-3/4 z-[999]"
      @pointerup="() => (isOpen = !isOpen)"
      @keyup.enter="() => (isOpen = !isOpen)"
    >
      <Icon name="system-uicons:close" class="text-5xl" />
      <span class="visually-hidden">Toggle Side Drawer</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const drawerRef: Ref<HTMLElement | null> = ref(null);
const isOpen = ref(false);

onMounted(() => {
  onClickOutside(drawerRef, () => (isOpen.value = false));
});
</script>

<style scoped lang="postcss">
.slot-wrapper {
  height: calc(100% - 8rem);
  min-height: 300px;
  width: 75%;
  max-width: 500px;
  position: absolute;
  inset: 0 0 0 auto;
  margin: auto 0;
  z-index: 999;
  background-color: var(--accent-color);
  border-radius: 0.25rem 0 0 0.25rem;
  transform: translateX(calc(100% - 3rem));
  animation: peekOut 1s 2s ease-in;
  pointer-events: all;
}

@keyframes peekOut {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: -0.5rem 0;
  }
}

button .icon {
  opacity: 0;
}

.drawer:not(.isOpen) {
  /* prevent overlay from blocking pointer events */
  z-index: -1;
}

.drawer.isOpen {
  background-color: hsl(var(--hsl-near-black) / 0.5);

  & .slot-wrapper {
    background-color: white;
    transform: translateX(0);
    animation-duration: 0s;
  }

  & button .icon {
    transform: rotate(180deg);
    opacity: 1;
  }
}
</style>
