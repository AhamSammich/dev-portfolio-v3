<template>
  <div
    ref="cardRef"
    :class="{
      'project-card transition-all duration-700 group relative flex flex-col w-full gap-4 overflow-hidden rounded-xl shadow-md': true,
      'basis-full sm:basis-[48%]': !expanded,
      'min-h-[60vh] basis-full xl:basis-3/4 max-sm:h-screen': expanded,
    }"
  >
    <NuxtImg
      v-if="image"
      :src="image.url"
      :alt="title"
      width="1800"
      height="860"
      sizes="xs:100vw sm:50vw md:50vw lg:50vw xl:50vw"
      class="object-cover"
      preset="screenshot"
      placeholder
    />
    <Icon
      v-else
      name="mdi:github-box"
      class="w-[48%] h-full p-[10%] mx-auto"
      :style="{ color: primaryColor }"
    />
    <div
      :class="{
        'absolute z-10 h-full w-full flex flex-col justify-center items-center bg-near-white bg-opacity-95 text-left text-near-black': true,
        'pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity': true,
      }"
      :style="`${
        expanded ? 'opacity: 1; justify-content: flex-start; padding: 2rem;' : ''
      }`"
    >
      <button
        class="absolute top-2 right-2"
        @pointerup="toggleExpanded"
        @keyup.enter="toggleExpanded"
      >
        <template v-if="expanded">
          <Icon name="system-uicons:close" class="text-5xl" />
          <span class="visually-hidden">Close Project Card</span>
        </template>
        <template v-else>
          <Icon name="system-uicons:expand" class="text-3xl" />
          <span class="visually-hidden">Expand Project Card</span>
        </template>
      </button>
      <div class="flex flex-col items-center justify-center gap-4">
        <h2
          :class="{
            'z-20 text-center': true,
          }"
        >
          {{ title }}
        </h2>
        <div class="project-links flex max-sm:flex-col max-sm:gap-4 gap-8">
          <a v-if="link" :href="link" target="_blank" title="Visit site">
            <Icon
              name="solar:link-bold-duotone"
              :class="{ 'text-2xl lg:text-4xl xl:text-5xl mb-1': true }"
            />
            <span :class="{ 'visually-hidden': !expanded }"> Visit site </span>
          </a>
          <a v-if="repo" :href="repo" target="_blank" title="View source code">
            <Icon
              name="mdi:github"
              :class="{ 'text-2xl lg:text-4xl xl:text-5xl mb-1': true }"
            />
            <span :class="{ 'visually-hidden': !expanded }"> View source code </span>
          </a>
        </div>
        <div v-if="longDescription && expanded">
          <p
            v-for="(line, index) in longDescription"
            :key="index"
            :class="{
              'my-4 mx-auto max-w-[48ch] lg:text-lg xl:text-xl': true,
            }"
          >
            {{ line }}
          </p>
        </div>
        <p
          v-else
          :class="{
            'mx-auto max-w-[48ch] px-4 text-center lg:text-lg xl:text-xl': true,
          }"
        >
          {{ description }}
        </p>
      </div>
      <div
        v-show="expanded"
        :class="{
          'py-4 transition-transform origin-top scale-75': true,
          'scale-y-0': !expanded,
        }"
      >
        <TechStack v-if="tech" :stack="tech" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  longDescription?: string[];
  link?: string;
  image?: {
    url: string;
    alt?: string;
  };
  tech?: string[];
  repo?: string;
}>();

const cardRef: Ref<HTMLElement | null> = ref(null);

const expanded = ref(false);

async function toggleExpanded(ev: Event) {
  expanded.value = !expanded.value;
  await sleep(3000);
  (ev.target as HTMLElement).scrollIntoView({ block: "start" });
}

const { primaryColor, accentColor } = useColors();

onMounted(() => {
  onClickOutside(cardRef.value, () => (expanded.value = false));
});
</script>

<style scoped lang="postcss">
.project-card:not(:has(img)) {
  box-shadow: none;
}
a .icon {
  color: v-bind(accentColor);
}
</style>
