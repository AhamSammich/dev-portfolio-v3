<template>
  <div
    ref="cardRef"
    :class="{
      'project-card transition-all duration-700 group relative flex flex-col w-full gap-4 overflow-hidden rounded-sm shadow-md': true,
      'basis-full sm:basis-[48%]': true,
      'expanded max-sm:min-h-[60vh] max-sm:h-screen': expanded,
    }"
  >
    <!-- project image -->
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

    <!-- no project image -->
    <Icon
      v-else
      name="mdi:github-box"
      class="w-[48%] h-full p-[10%] mx-auto"
      :style="{ color: primaryColor }"
    />

    <!-- project info overlay -->
    <div
      :class="{
        'overlay absolute z-10 h-full w-full flex flex-col justify-center items-center bg-near-white bg-opacity-95 text-left text-near-black': true,
        'pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity': true,
        expanded,
      }"
      :style="`${expanded ? 'opacity: 1; padding: 2rem;' : ''}`"
    >
      <!-- expand toggle button -->
      <button
        class="absolute top-2 right-2"
        @pointerup="toggleExpanded"
        @keyup.enter="toggleExpanded"
      >
        <!-- show close icon while expanded -->
        <template v-if="expanded">
          <Icon name="system-uicons:close" class="text-5xl" />
          <span class="visually-hidden">Close Project Card</span>
        </template>
        <!-- show expand icon normally -->
        <template v-else>
          <Icon name="system-uicons:expand" class="text-3xl" />
          <span class="visually-hidden">Expand Project Card</span>
        </template>
      </button>

      <!-- project details -->
      <div class="flex flex-col items-center justify-center gap-4">
        <h2
          :class="{
            'z-20 text-center': true,
          }"
        >
          {{ title }}
        </h2>

        <!-- project links -->
        <div
          :class="{
            'project-links flex max-sm:gap-4 gap-8': true,
            'max-sm:flex-col': expanded,
          }"
        >
          <!-- live site -->
          <a v-if="link" :href="link" target="_blank" title="Visit site">
            <Icon
              name="solar:link-bold-duotone"
              :class="{ 'text-2xl lg:text-4xl xl:text-5xl mb-1': true }"
            />
            <span :class="{ 'visually-hidden': !expanded }"> Visit site </span>
          </a>

          <!-- github repository -->
          <a v-if="repo" :href="repo" target="_blank" title="View source code">
            <Icon
              name="mdi:github"
              :class="{ 'text-2xl lg:text-4xl xl:text-5xl mb-1': true }"
            />
            <span :class="{ 'visually-hidden': !expanded }"> View source code </span>
          </a>
        </div>

        <!-- project description -->
        <div v-if="longDescription && expanded">
          <!-- show full description while expanded -->
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

        <!-- show single-line description normally -->
        <p
          v-else
          :class="{
            'mx-auto max-w-[48ch] px-4 text-center lg:text-lg xl:text-xl': true,
          }"
        >
          {{ description }}
        </p>

        <!-- show applicable skill icons when expanded -->
        <div
          v-show="expanded"
          :class="{
            'py-4 origin-top scale-75': true,
            'scale-y-0': !expanded,
          }"
        >
          <TechStack v-if="tech" :stack="tech" />
        </div>
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
  background-color: var(--near-black);
}

a .icon {
  color: v-bind(accentColor);
}

@media (prefers-reduced-motion: no-preference) {
  .project-card .overlay {
    transition: scale 0.5s;
  }
}

@media (min-width: 640px) {
  .expanded.project-card {
    overflow: visible;

    &:nth-of-type(2n) .overlay {
      transform-origin: bottom right;
    }

    &:nth-of-type(2n + 1) .overlay {
      transform-origin: bottom left;
    }

    /* set transform origins */
    &:nth-of-type(1) .overlay {
      transform-origin: top left;
    }

    &:nth-of-type(2) .overlay {
      transform-origin: top right;
    }

    & .overlay {
      scale: 2.02;

      & > * {
        transform-origin: top;
        transform: scale(0.7);
      }
    }
  }
}
</style>
