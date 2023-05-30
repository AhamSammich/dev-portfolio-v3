<template>
	<section
		id="hero"
		class="page flex items-center justify-center max-sm:flex-col max-sm:gap-8"
	>
		<div class="z-[1] grid gap-2 px-8">
			<p class="hidden">
				<a href="https://storyset.com/data">Data illustrations by Storyset</a>
			</p>
			<h1 class="text-3xl font-bold text-near-black lg:text-4xl xl:text-5xl">
				<span class="text-2xl font-normal lg:text-3xl xl:text-4xl"
					>My name is
				</span>
				<span class="block"> Andre Hammons </span>
			</h1>
			<p class="text-xl lg:text-2xl xl:text-3xl">
				I am a
				<span class="font-bold">web developer</span>
				<span class="ml-8 block">
					and I am
					<span class="font-bold">here to help!</span>
				</span>
			</p>
		</div>
		<div class="w-3/4 sm:w-1/3 xl:w-1/4">
			<HeroSvg fill-color="#172554" />
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
