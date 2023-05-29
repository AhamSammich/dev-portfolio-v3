<template>
    <div
        class="group relative p-16 flex flex-col gap-4 rounded-md md:min-h-[50svh] bg-gradient-to-b from-[#EEEEEE95] to-near-white shadow-md transition-all">
        <div
            class="w-20 h-20 bg-blue-950 text-white flex justify-center items-center rounded-full shadow-md absolute -top-12 inset-x-0 mx-auto">
            <Icon :name="iconName" class="text-5xl mx-auto" />
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