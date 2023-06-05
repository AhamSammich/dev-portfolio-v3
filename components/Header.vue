<template>
  <header
    class="fixed left-0 right-0 top-0 z-[99] flex items-start justify-end px-8 py-1 pointer-events-none"
    :style="{ color: baseColor }"
  >
    <ColorSlider
      :class="{
        'absolute left-2 top-2 z-[9999] transition-all': true,
      }"
    />

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

const { baseColor } = useColors();
</script>

<style scoped lang="postcss">
header > * {
  pointer-events: auto;
}
</style>
