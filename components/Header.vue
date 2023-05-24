<template>
    <header class="z-[999] fixed left-0 right-0 top-0 flex h-[100px] items-center justify-between px-8">
        <div class="flex items-center">
            <img src="https://a-us.storyblok.com/f/1014509/1000x1000/d7ee635410/alh-logo-web-dark-transformed.png/m/filters:format(webp)"
                alt="My Logo" width="64" height="64" :class="{
                    'absolute top-6 left-8 transition-all origin-right outline-none': true,
                    'scale-x-0 opacity-0': scrollAtTop,
                }" />
            <h1 :class="{
                'ml-4 text-3xl font-bold transition-all origin-left': true,
                'scale-x-0 opacity-0': !scrollAtTop,
            }">Andre L Hammons</h1>
        </div>

        <nav :class="{
            'hidden': scrollAtTop,
        }">
            <DropNav />
        </nav>
        <nav :class="{
            'w-1/2 transition-all origin-right': true,
            'scale-x-0 opacity-0': !scrollAtTop,
        }">
            <Nav />
        </nav>
    </header>
</template>

<script setup lang="ts">
const scrollAtTop = useState("scrollAtTop");

</script>

<style scoped></style>