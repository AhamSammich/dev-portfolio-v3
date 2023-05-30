<template>
    <section class="page flex flex-col gap-8 justify-center items-center">
        <h1 class="visually-hidden">Skills</h1>
        <TechStack title="Languages" :stack="[
            'javascript', 'typescript', 'html', 'css',]" />
        <TechStack title="Frameworks" :stack="[
            'vue', 'nuxt', 'astro', 'react',]" />
        <TechStack title="Tools" :stack="[
            'git', 'vscode',]" />
    </section>
</template>