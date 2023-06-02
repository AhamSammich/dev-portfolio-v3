<template>
  <section
    id="connect"
    class="page content flex max-sm:flex-col items-center justify-center gap-8 lg:gap-16 text-near-white bg-blue-950 bg-opacity-90"
  >
    <ContactForm />
    <div class="flex flex-col basis-[20%] max-sm:items-center justify-center gap-8 mx-4">
      <h1>Let's Connect!</h1>
      <ul class="w-max flex flex-col gap-4 xl:text-xl">
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
    <p class="absolute bottom-2 text-center text-sm font-thin">
      &copy; {{ new Date().getFullYear() }} Andre L. Hammons
    </p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
