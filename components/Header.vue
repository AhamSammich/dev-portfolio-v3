<template>
  <header
    class="left-0 fixed right-0 top-0 z-[99] flex items-start justify-end px-8 py-1 pointer-events-none"
  >
    <ColorSlider class="z-[9999] absolute left-2 top-2 transition-all" />

    <div
      :class="{
        'z-[999999]': !scrollAtTop,
        hidden: scrollAtTop,
      }"
    >
      <LazyDropNav />
    </div>
    <nav
      :class="{
        'w-1/2 origin-right transition-all': true,
        'scale-x-0 opacity-0 invisible': !scrollAtTop,
      }"
    >
      <Nav id="top-nav" />
    </nav>
  </header>
</template>

<script setup lang="ts">
const scrollAtTop = useState("scrollAtTop");
</script>

<style scoped lang="postcss">
header > * {
  pointer-events: auto;
}
</style>
