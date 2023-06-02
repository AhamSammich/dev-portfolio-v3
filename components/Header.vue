<template>
  <header
    class="fixed left-0 right-0 top-0 z-[99] flex items-start justify-end px-8 py-1"
  >
    <div
      ref="logoRef"
      :class="{
        'absolute left-3 top-3 bg-gradient-to-br from-[#33333333] to-transparent rounded-full p-1 transition-all cursor-pointer origin-top-left': true,
      }"
    >
      <LogoSvg :svg-size="40" @click="toggleColorSlider" />
    </div>
    <ColorSlider
      :class="{
        'absolute top-[40vh] left-9 w-[30vh] z-[9999] origin-left -rotate-90 transition-all': true,
        'invisible pointer-events-none scale-y-0 opacity-0': hideColorSlider,
      }"
    />
    <button
      :class="{
        'absolute top-14 left-6 text-2xl flex flex-col transition-opacity duration-500 delay-700': true,
        'invisible pointer-events-none opacity-0':
          hideColorSlider && !(unclicked && !scrollAtTop),
      }"
      @click="toggleColorSlider"
    >
      <Icon
        name="solar:double-alt-arrow-up-bold-duotone"
        :class="{ 'animate-bounce': unclicked }"
      />
      <span v-if="unclicked" class="text-sm ml-1 pt-1">
        Not your color?<br />Try this!
      </span>
      <span v-else class="visually-hidden">Close</span>
    </button>

    <div
      :class="{
        'z-[999999]': !scrollAtTop,
        hidden: scrollAtTop,
      }"
    >
      <DropNav />
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

const hideColorSlider = ref(true);

const logoRef: Ref<HTMLElement | null> = ref(null);

const unclicked = ref(true);

function toggleColorSlider() {
  unclicked.value = false;
  hideColorSlider.value = !hideColorSlider.value;
}
</script>

<style scoped lang="postcss"></style>
