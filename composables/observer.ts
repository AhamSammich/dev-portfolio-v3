interface ObserverOptions extends IntersectionObserverInit {
  targetClass?: string;
  intersectingClass?: string;
  unobserve?: boolean;
}

type ObserverComposable = (params?: ObserverOptions) => void;

/**
 * Creates an IntersectionObserver instance to animate elements during scroll.
 *
 * @link IntersectionObserver
 *
 * @param targetClass Class name given to elements you want to animate. Default: content
 *
 * @param intersectingClass Class name added when element is intersecting the root. Default: revealed
 *
 * @param unobserve If true, target elements will fade in only. Default: false
 *
 */
export const useObserver: ObserverComposable = async (
  options = {
    targetClass: "content",
    intersectingClass: "revealed",
    unobserve: false,
  }
) => {
  const targetClass = options.targetClass || "content";
  const intersectingClass = options.intersectingClass || "revealed";
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        // Reveal cards while scrolling
        if (target.classList.contains(targetClass)) {
          target.classList.add(intersectingClass);
        }
      } else if (target.classList.contains(intersectingClass)) {
        if (options.unobserve) {
          observer.unobserve(target);
        } else {
          target.classList.remove(intersectingClass);
        }
      }
    });
  }, options);

  document.querySelectorAll(`.${targetClass}`).forEach((target) => {
    observer.observe(target);
    if (target) observer.observe(target);
  });
};
