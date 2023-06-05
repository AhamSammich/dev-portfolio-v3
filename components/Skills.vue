<template>
  <section
    id="skills"
    class="page isolate flex flex-col items-center justify-center gap-8"
  >
    <Icon
      name="solar:code-2-line-duotone"
      class="z-[-1] text-[20vw] opacity-10 absolute top-4 right-4"
      :style="{ color: usePrimaryColor().value }"
    />
    <h1>Skills</h1>
    <div class="content flex flex-col gap-8 origin-center xl:scale-125">
      <TechStack title="Languages" :stack="['javascript', 'typescript', 'html', 'css']" />
      <TechStack title="Frameworks" :stack="['vue', 'nuxt', 'astro', 'tailwind']" />
      <TechStack title="Tools" :stack="['git', 'vscode', 'storyblok']" />
    </div>
  </section>
</template>
