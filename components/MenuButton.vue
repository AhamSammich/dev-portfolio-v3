<template>
  <button
    :class="{
      'btn-container h-12 w-12 opacity-80 xl:h-16 xl:w-16': true,
      'menu-open': menuOpen && !scrollAtTop,
    }"
    @pointerup="handleClick"
    @keyup.enter="handleClick"
  >
    <div class="top bar"></div>
    <div class="middle bar"></div>
    <div class="bottom bar"></div>
    <span class="visually-hidden">{{ buttonName }}</span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    buttonName?: string;
    forceClose?: boolean;
    closeOnly?: boolean;
  }>(),
  { buttonName: "menu", forceClose: false, closeOnly: false }
);
const emits = defineEmits(["open-menu", "close-menu"]);

const menuOpen = ref(false);

function toggleBtn() {
  menuOpen.value = !menuOpen.value;
  menuOpen.value ? emits("open-menu") : emits("close-menu");
}

function closeMenu() {
  menuOpen.value = false;
  emits("close-menu");
}

function handleClick() {
  if (props.closeOnly) {
    closeMenu();
  } else {
    toggleBtn();
  }
}

const scrollAtTop = useState("scroll");

watchEffect(() => {
  if (props.forceClose) closeMenu();
});
</script>

<style scoped lang="postcss">
.btn-container {
  --color1: var(--near-white);
  --color2: var(--near-black);
  background-color: transparent;
  cursor: pointer;
  position: relative;

  &.menu-open {
    & .bar {
      border: transparent;
      background-color: var(--secondary-color);
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
  background: var(--color1);
  border-bottom: 1px solid var(--secondary-color);
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
