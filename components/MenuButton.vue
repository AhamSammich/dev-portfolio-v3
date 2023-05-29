<template>
  <div :class="{ 'btn-container w-12 h-12 xl:w-16 xl:h-16 opacity-80': true, 'menu-open': menuOpen }"
    @pointerup="handleClick()">
    <!-- <div :class="{
      'absolute inset-0 m-auto transition-all origin-center duration-300': true,
      'scale-y-0 opacity-0': !menuOpen,
    }"> -->
    <div class="top bar shadow-sm"></div>
    <div class="middle bar shadow-sm"></div>
    <div class="bottom bar shadow-sm"></div>
    <!-- </div> -->

    <!-- <div :class="{
      'group absolute inset-0 m-auto transition-all origin-center': true,
      'scale-y-0 opacity-0': menuOpen,
      'delay-300': !menuOpen,
    }">
      <div class="circle group-hover:scale-[2] group-hover:opacity-0"></div>
      <div class="circle outer group-hover:rotate-90"></div>
      <div class="circle inner group-hover:rotate-180"></div>
    </div> -->

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
  })
});
</script>

<style scoped lang="postcss">
.btn-container {
  --color1: var(--accent-color);
  --color2: #333;
  /* width: 48px;
  height: 48px; */
  /* border: 0.1rem solid var(--color1); */
  /* border-radius: 0.2rem; */
  background-color: transparent;
  /* box-shadow: 0 0 0.2rem var(--color2); */
  cursor: pointer;
  position: relative;

  &.menu-open {
    /* & .bar {
      background-color: white;
    } */

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

    /* .bottom {
      opacity: 0;
    } */
  }
}

.bar {
  width: 80%;
  height: 1px;
  background-color: var(--color2);
  /* border-radius: 0.5rem; */
  position: absolute;
  top: 46%;
  left: 10%;
  transform-origin: center;
  transition:
    transform 0.25s,
    rotate 0.25s 0.25s,
    opacity 0s 0.25s,
    background-color 0.25s;
  pointer-events: none;

  /* &.middle {
    width: 50%;
    left: 40%;
  } */
}

.top {
  transform: translate3d(0, -300%, 0);
}

.bottom {
  transform: translate3d(0, 300%, 0);
}

.circle {
  --border-props: 1px solid var(--color2);
  width: 75%;
  aspect-ratio: 1;
  background-color: transparent;
  border-top: var(--border-props);
  /* border-radius: 50%; */
  position: absolute;
  inset: 0;
  margin: auto;
  transition: all 0.5s linear, border-radius 0.3s linear 0.45s;

  &:is(.btn-container:hover .circle) {
    transition: all 0.5s linear 0.25s, border-radius 0.3s linear;
    border-radius: 50%;
    border-bottom: var(--border-props);
    /* border-left: var(--border-props); */
  }


  /* &:not(.outer, .inner) {
    border-top: none;
    border-right: none;
  } */

  &.outer {
    width: 100%;
    /* border-bottom: none;
    border-left: none; */
  }

  &.inner {
    width: 50%;
    /* border-top: none;
    border-right: none; */
  }
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
