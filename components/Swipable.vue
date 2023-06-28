<template>
  <div @touchstart.capture.passive="handleTouchStart">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { allowAxis } = defineProps(["allowAxis"]);
const emits = defineEmits(["swipe-left", "swipe-right", "swipe-up", "swipe-down"]);
const startX: Ref<number> = ref(0);
const startY: Ref<number> = ref(0);
const MIN_SWIPE_LEN = 5;

const getHorizontalDirection = (delta: number) => {
  if (delta > MIN_SWIPE_LEN) emits("swipe-left");
  if (delta < -MIN_SWIPE_LEN) emits("swipe-right");
};

const getVerticalDirection = (delta: number) => {
  if (delta > MIN_SWIPE_LEN) emits("swipe-up");
  if (delta < -MIN_SWIPE_LEN) emits("swipe-down");
};

const getSwipeDirection = (deltaX: number, deltaY: number) => {
  const verticalSwipe = Math.abs(deltaY) > Math.abs(deltaX);
  const delta = verticalSwipe ? deltaY : deltaX;

  if (verticalSwipe) {
    getVerticalDirection(delta);
  } else {
    getHorizontalDirection(delta);
  }
};

const handleTouchMove = (ev: Event) => {
  const touch = (ev as TouchEvent).touches[0];
  const deltaX = startX.value - touch.clientX;
  const deltaY = startY.value - touch.clientY;

  if (!deltaX && !deltaY) return; // No touchmove

  switch (allowAxis) {
    case "x":
      getHorizontalDirection(deltaX);
      break;
    case "y":
      getVerticalDirection(deltaY);
      break;
    default:
      getSwipeDirection(deltaX, deltaY);
  }
  [startX.value, startY.value] = [0, 0];
};

const handleTouchStart = (ev: TouchEvent) => {
  const touch = ev.touches[0];
  [startX.value, startY.value] = [touch.clientX, touch.clientY];

  ev.target?.addEventListener("touchmove", handleTouchMove, {
    once: true,
    passive: true,
  });
};
</script>
