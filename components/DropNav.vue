<template>
  <div>
    <div class="absolute right-4 top-2 z-[9999]">
      <MenuButton
        @open-menu="openMenu"
        @close-menu="closeMenu"
        :force-close="scrollAtTop"
      />
    </div>
    <menu
      :class="{
        'absolute inset-0 mx-auto h-max origin-top bg-near-white py-4 shadow-lg transition-all': true,
        'invisible scale-y-0 opacity-0': !menuIsOpen,
      }"
    >
      <Nav :flex-col="true" />
    </menu>
  </div>
</template>

<script setup lang="ts">
const menuIsOpen = ref(false);
const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};

const openMenu = () => (menuIsOpen.value = true);
const closeMenu = () => (menuIsOpen.value = false);

const scrollAtTop: Ref<boolean> = useState("scrollAtTop");

// watchEffect(() => {
//   if (scrollAtTop.value && menuIsOpen.value) closeMenu();
// });
</script>

<style scoped lang="postcss">
ul {
  padding-top: 1rem;
}

li {
  z-index: 49;
  padding: 1rem 0;
  width: 50%;

  &:not(:first-child) {
    border-top: 1px solid var(--sec-color);
  }
}
</style>
