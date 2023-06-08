<template>
  <section
    id="skills"
    class="flex flex-col items-center justify-center gap-8 page isolate"
  >
    <Icon
      name="solar:code-2-line-duotone"
      class="bg-icon z-[-1] text-[20vw] opacity-10 absolute top-4 right-4"
    />
    <h1>Skills</h1>
    <div class="flex flex-col gap-8 content">
      <TechStack title="Languages" :stack="['javascript', 'typescript', 'html', 'css']" />
      <TechStack title="Frameworks" :stack="['vue', 'nuxt', 'astro', 'tailwind']" />
      <TechStack title="Tools" :stack="['git', 'vscode', 'storyblok']" />
    </div>
  </section>
</template>
