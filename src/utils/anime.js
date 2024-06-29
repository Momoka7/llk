import anime from "animejs";

export function fadeInOut(element) {
  anime({
    targets: element,
    alpha: [0, 1],
    duration: 300,
    easing: "linear",
    autoplay: true,
    direction: "alternate",
  });
}
