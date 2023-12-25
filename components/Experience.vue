<template>
  <section id="experience" class="flex flex-col items-center w-full gap-8 page h-max">
    <h1>Experience</h1>
    <LazyResumeModal />
    <Paginate
      id="experience"
      :num-of-pages="numOfPages"
      :active-page="page"
      @go-to-page="(pageNum) => (page = pageNum)"
      @prev-page="handlePrev"
      @next-page="handleNext"
    >
      <InfoBlock :key="page" v-bind="EXPERIENCE[page - 1]" />
    </Paginate>
  </section>
</template>

<script setup lang="ts">
const EXPERIENCE = [
  {
    headline: "Junior Developer",
    iconName: "mdi:briefcase-variant",
    bodyText: `At RECORD, our team enhanced the connection between personal injury attorneys and their clients by developing a mobile app allowing clients to actively participate in building their case and maximizing their settlement!`,
    url: "https://www.getrecord.com",
  },
  {
    headline: "Navy Veteran",
    iconName: "mdi:anchor",
    bodyText: `As a Navy veteran, I have learned the importance of teamwork, communication, and leadership. I have also learned the importance of being able to adapt to new situations and to be able to learn new skills quickly!`,
  },
  {
    headline: "Returning Graduate",
    iconName: "mdi:school",
    bodyText: `At the University of Nevada Las Vegas, I am pursuing a second bachelor's degree in Computer Science in order to reinforce my knowledge of the fundamentals of computer science and to learn new technologies and techniques to help me build better software!`,
  },
];

const page = ref(1);
const numOfPages = EXPERIENCE.length;

function handlePrev() {
  if (page.value === 1) return;
  page.value--;
}

function handleNext() {
  if (page.value === numOfPages) return;
  page.value++;
}
</script>
