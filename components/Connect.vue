<template>
  <section
    id="connect"
    class="gap-8 page content md:flex md:items-center md:justify-center"
  >
    <Icon
      name="ic:round-alternate-email"
      class="bg-icon text-[20vw] opacity-10 absolute top-4 right-4"
    />
    <div class="mt-4 max-md:mx-auto max-md:w-full w-max">
      <ContactForm />
    </div>
    <div class="max-md:mx-auto w-max">
      <h1 class="my-8">Let's Connect!</h1>
      <ul class="flex flex-col gap-4 w-max xl:text-xl">
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
    <LazyFooter class="absolute bottom-0" />
  </section>
</template>
