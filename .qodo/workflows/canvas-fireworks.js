// canvas-fireworks.js

(() => {
  // gets a reference to the HTML <canvas> element
  const canvas = document.getElementById("canvas-fireworks");

  // get the rendering context for the canvas
  const context = canvas.getContext("2d");

  // get document's width and height
  const width = window.innerWidth;
  const height = window.innerHeight;

  // set background to be fullscreen
  canvas.width = width;
  canvas.height = height;

  const positions = {
    mouseX: 0,
    mouseY: 0,
    anchorX: 0,
    anchorY: 0,
  };
})();