<template>
    <div class="group relative flex flex-col items-center justify-between w-full h-[90svh] gap-4 pt-4">
        <slot />
        <div class="buttons">
            <div v-for="(_, index) in Array(numOfPages)" :key="index">
                <input type="radio" name="page" :class="{
                    'appearance-none w-3 h-3 rounded-full bg-blue-950 opacity-80 cursor-pointer': true,
                    'bg-transparent border border-blue-950 scale-90': index === activePage - 1,
                }" @pointerdown="() => $emit('go-to-page', index + 1)" />
                <label class="visually-hidden">Page {{ index + 1 }}</label>
            </div>
        </div>
        <div class="arrows">
            <Icon name="solar:double-alt-arrow-left-bold-duotone"
                :class="{ ...iconClass, 'opacity-0 pointer-events-none': activePage === 1 }"
                @pointerdown="$emit('prev-page')" />
            <Icon name="solar:double-alt-arrow-right-bold-duotone"
                :class="{ ...iconClass, 'opacity-0 pointer-events-none': activePage === numOfPages }"
                @pointerdown="$emit('next-page')" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { numOfPages = 1, activePage = 1 } = defineProps(["numOfPages", "activePage"]);
defineEmits(['prev-page', 'next-page', 'go-to-page'])
const iconClass = {
    "cursor-pointer text-4xl drop-shadow-md text-blue-950": true,
    "absolute bottom-12 inset-y-0 my-auto z-10 ": false,
}

</script>

<style scoped lang="postcss">
.arrows {
    width: 100%;
    position: absolute;
    top: 50%;
    padding: 0 2rem;
    display: none;

    @media (height < 400px) {
        display: flex;
        justify-content: space-between;
    }
}

.buttons {
    display: none;

    @media (min-height: 400px) {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }
}</style>