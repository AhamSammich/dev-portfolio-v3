<template>
  <section
    class="page isolate flex flex-col items-center justify-center gap-8 text-near-white bg-blue-950 bg-opacity-90"
  >
    <Icon
      name="solar:code-2-line-duotone"
      class="z-[-1] text-[50vw] text-blue-950 opacity-20 absolute top-0 right-0"
    />
    <h1 class="visually-hidden">What I Use</h1>
    <TechStack title="Languages" :stack="['javascript', 'typescript', 'html', 'css']" />
    <TechStack title="Frameworks" :stack="['vue', 'nuxt', 'astro', 'tailwind']" />
    <TechStack title="Tools" :stack="['git', 'vscode']" />
  </section>
</template>
