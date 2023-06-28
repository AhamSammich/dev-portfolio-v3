<template>
  <section id="services" class="flex flex-col items-center w-full gap-8 page h-max">
    <h1>How Can I Help?</h1>
    <LazyResumeModal />
    <Paginate
      id="services"
      :num-of-pages="numOfPages"
      :active-page="page"
      @go-to-page="(pageNum) => (page = pageNum)"
      @prev-page="handlePrev"
      @next-page="handleNext"
    >
      <InfoBlock :key="page" v-bind="SERVICES[page - 1]" />
    </Paginate>
  </section>
</template>

<script setup lang="ts">
const SERVICES = [
  {
    headline: "Need a website?",
    iconName: "mdi:web",
    bodyText: `Whether you're looking to grow your online business or just looking for a sweet custom personal landing page, I can help!\nI would love to help you create a fast and responsive website to provide your audience with a unique online experience on any device. Bring your own design or we can work together to discover your style.`,
  },
  {
    headline: "Building a project?",
    iconName: "fluent:people-team-48-filled",
    bodyText: `Looking for contributers for your next big project? I'm here for you! I have over a decade of experience working with and leading others toward a common goal. 
                I can quickly learn and adapt to any team or tech stack, and I'm fueled by challenging problems! Let's collaborate to bring your project to life!`,
  },
  {
    headline: "Learning to code?",
    iconName: "solar:chat-square-code-bold",
    bodyText: `If you're beginning your coding journey and you're looking for a mentor, a learning buddy, or just a friend to talk with about code, connect with me!
                I would love to hear from you and share knowledge! If you're learning a language or framework I don't know yet, I hope we can learn together!`,
  },
];

const page = ref(1);
const numOfPages = SERVICES.length;

function handlePrev() {
  if (page.value === 1) return;
  page.value--;
}

function handleNext() {
  if (page.value === numOfPages) return;
  page.value++;
}
</script>
