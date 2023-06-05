<template>
  <section
    id="connect"
    class="page content md:flex md:items-center md:justify-center gap-8"
  >
    <Icon
      name="ic:round-alternate-email"
      class="text-[20vw] opacity-10 absolute top-4 right-4"
      :style="{ color: primaryColor }"
    />
    <div class="max-md:mx-auto max-md:w-full w-max mt-4">
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
    <p class="absolute bottom-2 w-full text-center text-xs font-thin">
      &copy; {{ new Date().getFullYear() }} Andre L. Hammons
      <a href="https://storyset.com/data"> | Data illustrations by Storyset</a>
    </p>
  </section>
</template>

<script setup lang="ts">
const { primaryColor } = useColors();
</script>
