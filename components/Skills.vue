<template>
  <section id="skills" class="flex flex-col gap-8 page isolate">
    <Icon
      name="solar:code-2-line-duotone"
      class="bg-icon z-[-1] text-[20vw] opacity-10 absolute top-4 right-4"
    />
    <h1 class="self-center">Skills</h1>
    <div class="flex flex-col max-w-full w-max mx-auto gap-16 h-max px-12 content">
      <TechStack
        title="Preferred Stack"
        :stack="['vue', 'typescript', 'nuxt', 'tailwind']"
      />
      <TechStack
        title="Other Tech I Have Worked With"
        :stack="['node', 'react', 'next', 'postgresql']"
      />
      <TechStack
        title="Currently Exploring"
        :stack="['astro', 'google cloud', 'python']"
      />
    </div>
  </section>
</template>
