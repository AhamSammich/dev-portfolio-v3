<template>
  <section id="about" class="flex flex-col items-center gap-8 page">
    <h1 class="text-center">Who Am I?</h1>
    <Paginate
      id="about"
      :num-of-pages="numOfPages"
      :active-page="page"
      @go-to-page="(pageNum) => (page = pageNum)"
      @prev-page="handlePrev"
      @next-page="handleNext"
    >
      <InfoBlock
        v-show="page === 1"
        headline="Professional"
        icon-name="mdi:certificate"
        :body-text="`I served as a submarine electronics technician in the United States Navy for 8 years, where I grew into a seasoned problem solver and an adept learner of new technologies and systems.
          I get inspired by the ingenuity and forward momentum found in the ever-growing tech industry, where I look forward to contributing and continuously developing new skills!`"
      />
      <LazyInfoBlock
        v-show="page === 2"
        headline="Personal"
        icon-name="mdi:heart"
        :body-text="`I am a proud father who just cannot resist a great dad joke! When I'm not passing the hours re-binging shows with my wife, I love hosting board game nights and singing karaoke with good friends.
          I also enjoy spending time reading articles about programming and web design tricks for inspiration. I whole-heartedly believe in life-long learning and using today to learn and grow just a bit more than yesterday.`"
      />
    </Paginate>
  </section>
</template>

<script setup lang="ts">
const page = ref(1);
const numOfPages = 2;

function handlePrev() {
  if (page.value === 1) return;
  page.value--;
}

function handleNext() {
  if (page.value === numOfPages) return;
  page.value++;
}
</script>
