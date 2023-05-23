<template>
    <header class="z-[999] fixed left-0 right-0 top-0 flex h-[100px] items-center justify-between p-8">
        <div class="gap-4 flex items-center ">
            <img src="https://a-us.storyblok.com/f/1014509/1002x1004/bb1b48b4d5/alh-logo-web.png" alt="My Logo" width="80"
                height="80" />
            <h1 class="text-3xl font-bold">Andre L Hammons</h1>
        </div>

        <nav>
            <ul class="flex gap-8">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>

    <main class="grid justify-center">
        <section id="hero" class="page flex items-center justify-around">
            <div class="px-8">
                <h1 class="text-3xl font-bold text-near-black">
                    This is the Hero Section
                </h1>
                <p class="text-xl">This is a description</p>
            </div>
            <img src="https://a-us.storyblok.com/f/1014509/1002x1004/bb1b48b4d5/alh-logo-web.png"
                alt="This is the Hero Image" width="300" height="300" />
            <!-- <div ref="circleRef" :style="{ ...style }"
                class="relative w-[300px] h-[300px] bg-gradient-to-r from-transparent to-near-black rounded-full">
                <div ref="innerCircleRef" :style="{ 'rotate': `-${angle || 0}deg` }"
                    class="absolute inset-0 m-auto w-[250px] h-[250px] overflow-hidden bg-gradient-to-t from-transparent to-near-black rounded-full">
                    <img src="https://a-us.storyblok.com/f/1014509/1002x1004/bb1b48b4d5/alh-logo-web.png" alt="My Logo"
                        class="object-cover absolute inset-0 m-auto" />
                </div>
            </div> -->
            <Icon name="ic:round-arrow-downward" class="absolute bottom-4 mx-auto w-full text-5xl animate-bounce" />
        </section>

        <section id="projects" class="page flex flex-col items-center gap-20">
            <h1 class="text-3xl font-bold">This is the Projects Section</h1>
            <ProjectGrid />
        </section>

        <section id="contact" class="page flex flex-col justify-center gap-12 items-center">
            <h1 class="text-3xl font-bold">This is the Contact Section</h1>
            <ul class="flex flex-col gap-12">
                <li>
                    <Icon name="mdi:email" />
                    Email
                </li>
                <li>
                    <Icon name="mdi:linkedin" />
                    LinkedIn
                </li>
                <li>
                    <Icon name="mdi:github" />
                    GitHub
                </li>
                <li>
                    <Icon name="mdi:twitter" />
                    Twitter
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
// const circleRef: Ref<HTMLElement | null> = ref(null);
// const { x, y } = useMouse()

// const previousAngle = ref(0);

// const angle = computed((): number => {
//     const distanceX = x.value - (window.innerWidth / 2);
//     const distanceY = y.value - (window.innerHeight / 2);
//     const theta = toDegrees(Math.atan2(distanceY, distanceX));
//     console.log({ theta, distanceX, distanceY });
//     if (!isNaN(theta)) previousAngle.value = theta;
//     return theta;
// })

// const style = computed(() => ({ rotate: `${angle.value }deg` }))

onMounted(() => {

})
</script>