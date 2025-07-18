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


animate(['feTurbulence', 'feDisplacementMap'], {
  baseFrequency: .05,
  scale: 15,
  alternate: true,
  loop: true
});

animate('polygon', {
  points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
  alternate: true,
  loop: true
});

console.log("ItMoves Test")