<template>
  <section id="projects" class="flex flex-col items-center gap-12 page content">
    <Icon
      name="icon-park-outline:folder-code-one"
      class="bg-icon text-[20vw] opacity-10 absolute top-4 right-4"
    />
    <h1>Projects</h1>
    <div class="flex flex-wrap items-center justify-center gap-1 h-max max-w-[1280px]">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
        @open-details="(title) => openProjectModal(title)"
      />
    </div>

    <LazyProjectModal
      v-if="activeProject"
      v-bind="activeProject"
      :show-modal="showDetails"
      @close-modal="() => (showDetails = false)"
    />
  </section>
</template>

<script setup lang="ts">
const projects: Project[] = [
  {
    title: "Hanafuda Koi-Koi",
    description: "An interactive card game featuring designs by various artists.",
    longDescription: [
      "Play against an automated opponent in a game of Koi-Koi, a Japanese game using hanafuda (lit. 'flower cards').",
      "Browse the gallery and choose from multiple hanafuda designs created by artists around the globe!",
    ],
    link: {
      url: "https://newhanafuda.art",
      qrCode: "/qrcode_newhanafuda.art.png",
    },
    image: {
      url: "/hanafuda_art_cherry.png",
    },
    tech: ["typescript", "vue", "nuxt", "firebase"],
    repo: "https://www.github.com/fuda-cafe/hanafuda-art",
  },
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
      qrCode: "qrcode_lindsaynicolepm.com.png",
    },
    image: {
      url: "https://a-us.storyblok.com/f/1014509/1851x884/6557c81d02/lindsaynicolepm.png",
    },
    tech: ["typescript", "tailwind", "nuxt", "storyblok"],
  },
  // {
  //   title: "Let's Play Battleship",
  //   description: "Invite a friend for a quick real-time game of Battleship.",
  //   longDescription: [
  //     "Play against a friend (or a stranger) in a quick round of Battleship.",
  //     "Chat with your opponent over a real-time connection using the Socket.io library.",
  //   ],
  //   link: {
  //     url: "https://play.battleship.up.railway.app",
  //     qrCode: "https://qr-codes-svg.s3.amazonaws.com/7RX2y6.svg",
  //   },
  //   image: {
  //     url: "https://a-us.storyblok.com/f/1014509/1851x885/fd64aeeebe/2023-06-03.png",
  //   },
  //   tech: ["javascript", "vue", "express", "socket.io"],
  //   repo: "https://www.github.com/ahamsammich/lets-play-battleship",
  // },
  // {
  //   title: "What about this site?",
  //   description: "Check out this portfolio on GitHub!",
  //   tech: ["typescript", "tailwind", "vue", "nuxt"],
  //   repo: "https://www.github.com/ahamsammich/dev-portfolio-v3",
  // },
];

const activeProject: Ref<Project | undefined> = ref(undefined);
const showDetails = ref(false);

function setActiveProject(projectTitle: string) {
  activeProject.value = projects.find((project) => project.title === projectTitle);
}

function openProjectModal(projectTitle: string) {
  setActiveProject(projectTitle);
  showDetails.value = true;
}
</script>
