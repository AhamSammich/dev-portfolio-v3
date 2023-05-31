<template>
  <section
    id="skills"
    class="page isolate flex flex-col items-center justify-center gap-8 text-near-white"
  >
    <Icon
      name="solar:code-2-line-duotone"
      class="z-[-1] text-[50vw] opacity-20 absolute top-0 right-0"
      :style="{ color: usePrimaryColor().value }"
    />
    <h1 class="visually-hidden">What I Use</h1>
    <div class="flex flex-col gap-8 origin-center xl:scale-125">
      <TechStack title="Languages" :stack="['javascript', 'typescript', 'html', 'css']" />
      <TechStack title="Frameworks" :stack="['vue', 'nuxt', 'astro', 'tailwind']" />
      <TechStack title="Tools" :stack="['git', 'vscode']" />
    </div>
  </section>
</template>
