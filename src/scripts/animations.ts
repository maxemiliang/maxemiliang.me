import anime from "animejs";

const tl = anime.timeline({
  duration: 750,
});

tl.add({
  targets: "#intro h2, #intro p",
  translateY: [10, 0],
  opacity: [0, 1],
  delay: anime.stagger(100, { start: 500 }),
})
  .add(
    {
      targets: "#intro picture",
      scale: [0.2, 1],
      opacity: [0, 1],
    },
    "-=750"
  )
  .add({
    targets: "#intro button",
    opacity: [0, 1],
  });
