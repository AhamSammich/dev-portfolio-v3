<template>
    <div
        class="group relative mt-8 p-12 flex flex-col gap-4 rounded-xl min-h-[50svh] bg-gradient-to-b from-[#EEEEEE95] to-near-white shadow-md transition-all">
        <div
            class="w-16 lg:w-20 aspect-square bg-blue-950 text-white flex justify-center items-center rounded-full absolute -top-8 inset-x-0 mx-auto">
            <Icon :name="iconName" class="text-4xl lg:text-5xl mx-auto" />
        </div>
        <h2 class="font-bold text-xl xl:text-2xl text-center">{{ headline }}</h2>
        <p
            v-for="(line, index) in splitText" :key="index"
            class="max-sm:text-sm xl:text-xl text-left max-w-[48ch] font-thin">
            {{ line }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    iconName: string
    headline: string
    bodyText: string
}>()

const splitText = props.bodyText.split('\n');
</script>

<style scoped></style>