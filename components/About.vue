<template>
  <section
    id="about"
    class="page fixed left-0 top-0 flex items-center justify-center gap-4 flex-col"
  >
    <div class="bg-opacity-85 grid max-sm:gap-12 sm:gap-4 p-4 w-full">
      <h1 class="text-center text-xl md:text-2xl xl:text-4xl text-near-black font-bold">
        Who Am I?
      </h1>
      <PaginatedWrapper
        :num-of-pages="numOfPages"
        :active-page="page"
        @go-to-page="(pageNum) => (page = pageNum)"
        @prev-page="handlePrev"
        @next-page="handleNext"
      >
        <HoverBlock
          v-show="page === 1"
          headline="Professionally"
          icon-name="mdi:certificate"
          :body-text="`I served as a submarine electronics technician in the United States Navy for 8 years, where I grew into a seasoned problem solver and an adept learner of new technologies and systems. I get inspired by the ingenuity and forward momentum found in the ever-growing tech industry, where I look forward to contributing and continuously developing new skills!`"
        />
        <HoverBlock
          v-show="page === 2"
          headline="Personally"
          icon-name="mdi:heart"
          :body-text="`I am a proud father and husband who just cannot resist a great dad joke! I love board game nights and karaoke with good friends. I also enjoy spending time reading about and learning new tech online for inspiration.`"
        />
      </PaginatedWrapper>
    </div>
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

<style scoped></style>
