<template>
  <section
    id="connect"
    class="page content md:flex md:items-center md:justify-center gap-8"
  >
    <div class="max-md:mx-auto w-max">
      <ContactForm />
    </div>
    <div class="max-md:mx-auto w-max">
      <h1 class="my-8">Let's Connect!</h1>
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
    <p class="absolute bottom-[2dvh] text-center text-sm font-thin">
      &copy; {{ new Date().getFullYear() }} Andre L. Hammons
    </p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
