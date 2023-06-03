<template>
  <section id="projects" class="page content flex flex-col items-center gap-12">
    <Icon
      name="fa6-solid:laptop-code"
      class="text-[40vw] opacity-10 absolute bottom-8 left-4"
      :style="{ color: primaryColor }"
    />
    <h1>Projects</h1>
    <div class="flex flex-wrap justify-center items-center gap-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :long-description="project.longDescription"
        :image="project.image"
        :link="project.link?.url"
        :tech="project.tech"
        :repo="project.repo"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { primaryColor } = useColors();

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
    tech: ["typescript", "tailwind", "vue", "nuxt", "storyblok"],
  },
  {
    title: "Let's Play Koi-Koi",
    description: "An interactive card game featuring designs by various artists.",
    longDescription: [
      "My small passion project!",
      "Play against an automated opponent in a game of Koi-Koi, a Japanese game using hanafuda (lit. 'flower cards').",
      "Browse the gallery and choose from multiple hanafuda designs created by artists around the globe!",
    ],
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
  {
    title: "What about this site?",
    description: "Check out this portfolio on GitHub!",
    tech: ["typescript", "tailwind", "vue", "nuxt"],
    repo: "https://www.github.com/ahamsammich/dev-portfolio-v3",
  },
];
</script>
