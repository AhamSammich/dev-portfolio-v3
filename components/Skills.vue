<template>
  <section id="skills" class="flex flex-col gap-8 page isolate">
    <Icon
      name="solar:code-2-line-duotone"
      class="bg-icon z-[-1] text-[20vw] opacity-10 absolute top-4 right-4"
    />
    <h1 class="self-center">Skills</h1>
    <div class="flex flex-col max-w-full w-max mx-auto gap-16 h-max px-12 content">
      <TechStack title="Languages" :stack="['typescript', 'javascript', 'python']" />
      <TechStack title="Frontend" :stack="['vue', 'react', 'tailwind', 'nuxt', 'next']" />
      <TechStack
        title="Backend"
        :stack="['supabase', 'postgresql', 'firebase', 'node', 'express']"
      />
    </div>
  </section>
</template>
