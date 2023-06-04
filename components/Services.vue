<template>
  <section
    id="services"
    class="page content flex h-max w-full flex-col items-center justify-center gap-8"
  >
    <h1>How Can I Help?</h1>
    <!-- <div class="flex max-md:flex-col justify-center gap-4 flex-wrap"> -->
    <Paginate
      id="services"
      :num-of-pages="numOfPages"
      :active-page="page"
      @go-to-page="(pageNum) => (page = pageNum)"
      @prev-page="handlePrev"
      @next-page="handleNext"
    >
      <InfoBlock
        v-show="page === 1"
        headline="Need a website?"
        icon-name="mdi:web"
        :body-text="`Whether you're looking to grow your online business or just looking for a sweet custom personal landing page, I can help!\nI would love to help you create a fast and responsive website to provide your audience with a unique online experience on any device. Bring your own design or we can work together to discover your style.`"
      />
      <InfoBlock
        v-show="page === 2"
        headline="Building a project?"
        icon-name="fluent:people-team-48-filled"
        :body-text="`Looking for contributers for your next big project? I'm here for you! I have over a decade of experience working with and leading others toward a common goal. 
                I can quickly learn and adapt to any team or tech stack, and I'm fueled by challenging problems! Let's collaborate to bring your project to life!`"
      />
      <InfoBlock
        v-show="page === 3"
        headline="Learning to code?"
        icon-name="solar:chat-square-code-bold"
        :body-text="`If you're beginning your coding journey and you're looking for a mentor, a learning buddy, or just a friend to talk with about code, connect with me!
                I would love to hear from you and share knowledge! If you're learning a language or framework I don't know yet, I hope we can learn together!`"
      />
    </Paginate>
    <ResumeModal />
    <!-- </div> -->
  </section>
</template>

<script setup lang="ts">
const page = ref(1);
const numOfPages = 3;

function handlePrev() {
  if (page.value === 1) return;
  page.value--;
}

function handleNext() {
  if (page.value === numOfPages) return;
  page.value++;
}
</script>

<style scoped></style>
