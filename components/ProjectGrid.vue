<template>
  <section id="projects" class="page flex flex-col items-center gap-12">
    <Icon
      name="mdi:source-repository-multiple"
      class="text-[40vw] opacity-20 absolute bottom-8 left-0"
      :style="{ color: usePrimaryColor().value }"
    />
    <h1 class="text-near-white text-xl md:text-2xl xl:text-4xl font-bold">Projects</h1>
    <div class="flex flex-wrap justify-center gap-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :long-description="project.longDescription"
        :image="project.image"
        :link="project.link.url"
        :tech="project.tech"
        :repo="project.repo"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Shop Lindsay Nicole",
    description: "A custom website made for a local reseller.",
    longDescription: [
      "Lindsay's design brought to life through an iterative and collaborative process.",
      "Storyblok CMS integration allows her to edit site assets and content without requiring access to the codebase.",
      "Up-to-date shop listings are featured using server-side rendering and Etsy's REST API endpoints.",
    ],
    link: {
      url: "https://lindsaynicolepm.com",
    },
    image: {
      url: "https://a-us.storyblok.com/f/1014509/1851x884/6557c81d02/lindsaynicolepm.png",
    },
    tech: ["typescript", "tailwind", "vue", "nuxt"],
  },
  {
    title: "Let's Play Koi-Koi",
    description: "An interactive card game featuring designs by various artists.",
    link: {
      url: "https://lets-play-koikoi.vercel.app",
    },
    image: {
      url:
        "https://a-us.storyblok.com/f/1014509/1846x885/22739eea0c/lets-play-koikoi.png",
    },
    tech: ["javascript", "css", "vue", "nuxt"],
    repo: "https://www.github.com/ahamsammich/lets-play-koikoi",
  },
];
</script>

<style scoped></style>
