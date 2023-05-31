<template>
  <div
    :class="{
      'btn-container h-12 w-12 opacity-80 xl:h-16 xl:w-16': true,
      'menu-open': menuOpen,
    }"
    @pointerup="handleClick()"
  >
    <div class="top bar shadow-sm"></div>
    <div class="middle bar shadow-sm"></div>
    <div class="bottom bar shadow-sm"></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    forceState?: boolean | null;
    closeOnly?: boolean;
  }>(),
  { forceState: null, closeOnly: false }
);
const emits = defineEmits(["open-menu", "close-menu"]);

const menuOpen = ref(false);

function toggleBtn() {
  menuOpen.value = !menuOpen.value;
  menuOpen.value ? emits("open-menu") : emits("close-menu");
}

function closeMenu() {
  emits("close-menu");
}

function handleClick() {
  if (props.closeOnly) {
    closeMenu();
  } else {
    toggleBtn();
  }
}

function handleForceState() {
  if (props.forceState === null) return;
  menuOpen.value = props.forceState;
  props.forceState ? emits("open-menu") : emits("close-menu");
}

onMounted(() => {
  watchEffect(() => {
    if (menuOpen.value === props.forceState) return;
    handleForceState();
  });
});
</script>

<style scoped lang="postcss">
.btn-container {
  --color1: #eee;
  --color2: #333;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  &.menu-open {
    & .bar {
      border-color: transparent;
      height: 1px;
    }

    & .middle {
      transform: none;
      opacity: 0;
    }

    & .top {
      transform: none;
      rotate: 45deg;
    }

    & .bottom {
      transform: none;
      rotate: -45deg;
      opacity: 1;
    }
  }

  &:not(.menu-open) {
    :is(.top, .bottom) {
      transition: rotate 0.25s, transform 0.25s linear 0.25s, opacity 0s 0.25s;
    }
  }
}

.bar {
  width: 80%;
  height: 2px;
  border-bottom: 1px solid var(--color1);
  background-color: var(--color2);
  position: absolute;
  top: 46%;
  left: 10%;
  transform-origin: center;
  transition: transform 0.25s, rotate 0.25s 0.25s, opacity 0s 0.25s,
    background-color 0.25s;
  pointer-events: none;
}

.top {
  transform: translate3d(0, -300%, 0);
}

.bottom {
  transform: translate3d(0, 300%, 0);
}

.icon {
  position: absolute;
  height: 80%;
  width: 80%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  stroke: var(--color2);
}
</style>
