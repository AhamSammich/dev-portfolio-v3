<template>
  <Header />

  <main
    ref="mainRef"
    class="grid motion-safe:scroll-smooth"
    :style="`
			background: radial-gradient(
            circle at 0% 0%, 
            #EEE, 
            ${primaryColor} 50%
            );`"
  >
    <div
      id="main-background"
      class="pointer-events-none fixed left-4 right-1/2 top-4 z-0 aspect-square w-[30vw] opacity-75"
      :style="`transform: translateY(${mainScroll / 20}px) translateX(${
        mainScroll / 20
      }%);`"
    ></div>

    <Hero />

    <Icon
      name="solar:double-alt-arrow-down-bold-duotone"
      :class="{
        'drop-shadow-white absolute bottom-4 mx-auto w-full origin-bottom text-4xl text-near-white drop-shadow-md transition-all duration-500 motion-safe:animate-bounce lg:text-6xl': true,
        'opacity-0': !scrollAtTop,
      }"
    />

    <Skills />

    <Services />

    <ProjectGrid />

    <About />

    <Connect />
  </main>
</template>

<script setup lang="ts">
const { x, y } = useMouse();

const mainRef: Ref<HTMLElement | null> = ref(null);
const mainScroll = ref(0);

const spotlightMaxSize = 60;
const spotlightSize = ref(spotlightMaxSize);

const primaryColor = usePrimaryColor();

const scrollAtTop = useState("scrollAtTop", () => true);

// function handleTouchstart(ev: Event) {
//   if (!(ev.target instanceof Element)) return;
//   console.log("down");
//   ev.target.classList.add("touch");
// }

// function handleTouchmove(ev: Event) {
//   if (!(ev.target instanceof Element)) return;
//   // console.log({ x: x.value, y: y.value });
// }

// function handleTouchend(ev: Event) {
//   if (!(ev.target instanceof Element)) return;
//   console.log("up");
//   ev.target.classList.remove("touch");
// }

onMounted(() => {
  mainRef.value?.addEventListener(
    "scroll",
    () => {
      if (!mainRef.value) return;
      mainScroll.value = mainRef.value.scrollTop;
      scrollAtTop.value = mainScroll.value === 0;
    },
    { passive: true }
  );

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) {
  //           entry.target.style = "transition: color 500ms; color: lightsteelblue;";
  //         } else {
  //           entry.target.style = "";
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0,
  //       root: document.querySelector("main"),
  //       rootMargin: "-50px 0px 0px 0px",
  //     }
  //   );

  //   document.querySelectorAll(".page h1.observe").forEach((target) => {
  //     observer.observe(target);
  //   });

  watchEffect(() =>
    mainRef.value?.style.setProperty(
      "background",
      `radial-gradient(
            circle at ${(x.value / window.innerWidth) * 100}% ${
        (y.value / window.innerHeight) * 100
      }%, 
            #EEE, 
            ${primaryColor.value} ${spotlightSize.value}%
            )`
    )
  );
});
</script>

<style scoped lang="postcss">
#main-background {
  --img-url: url("https://a-us.storyblok.com/f/1014509/1000x1000/d7ee635410/alh-logo-web-dark-transformed.png/m/filters:format(webp)");
  background: var(--img-url), v-bind(primaryColor);
  background-blend-mode: lighten;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  mask-image: var(--img-url);
  mask-size: contain;
  mask-repeat: no-repeat;
}
</style>
