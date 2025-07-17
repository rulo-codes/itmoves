const { animate, utils, createDraggable, createSpring } = anime;


animate('span', {
  // Property keyframes
  y: [
    { to: '-7.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: (_, i) => i * 50, // Function based value
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});

console.log("ItMoves Test")