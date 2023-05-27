<template>
    <section id="about" class="page fixed top-0 left-0 flex justify-center items-center gap-16">
        <div class="grid gap-8 p-8 rounded-md bg-near-white bg-opacity-85 text-near-black shadow-lg">
            <h1 class="text-3xl font-bold">About Me</h1>
            <p class="max-w-[50ch] font-thin">
                I have 2+ years of experience with JavaScript, HTML, and CSS through personal and work-related projects,
                as well as 8+ years of experience in complex problem-solving, troubleshooting/debugging and teamwork.
            </p>
            <p class="max-w-[50ch] font-thin">
                I am an expert problem solver and quick to learn new technologies and understand unfamiliar systems. I can
                develop applications to optimize work processes and boost productivity.
            </p>
        </div>
        <div class="grid">
            <TechStack title="Languages" :stack="[
                'js', 'ts', 'html', 'css',]" />
            <TechStack title="Frameworks" :stack="[
                'vue', 'nuxt', 'astro', 'react',]" />
            <TechStack title="Tools" :stack="[
                'git', 'vscode',]" />
        </div>
        <!-- <div id="about-image" class="h-full">
                <img src="" alt="This is a professional headshot" class="object-contain" />
            </div> -->
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>