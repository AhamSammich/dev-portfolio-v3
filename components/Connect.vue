<template>
  <section
    id="connect"
    class="page flex max-sm:flex-col items-center justify-center gap-4 lg:gap-16 text-near-white bg-blue-950 bg-opacity-90"
  >
    <ContactForm />
    <div class="flex flex-col basis-[20%] max-sm:items-center justify-center gap-4 mx-4">
      <h1 class="text-xl md:text-2xl xl:text-4xl font-bold">Let's Connect!</h1>
      <ul class="w-max flex flex-col gap-4 max-md:text-xs xl:text-xl">
        <li>
          <ContactLink
            url="mailto:connect@ahammons.me"
            icon-name="mdi:email"
            label="connect@ahammons.me"
          />
        </li>
        <li>
          <ContactLink
            url="https://linkedin.com/in/mynameisandre"
            icon-name="mdi:linkedin"
            label="mynameisandre"
          />
        </li>
        <li>
          <ContactLink
            url="https://github.com/ahamsammich"
            icon-name="mdi:github"
            label="ahamsammich"
          />
        </li>
        <li>
          <ContactLink
            url="https://twitter.com/hammons_dev"
            icon-name="mdi:twitter"
            label="hammons_dev"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
