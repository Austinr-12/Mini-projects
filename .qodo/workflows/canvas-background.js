// canvas-background.js
// canvas-background.js

(() => {
  const canvas = document.getElementById("canvas-background");
  const context = canvas.getContext("2d");

  // get document's width and height
  const width = window.innerWidth;
  const height = window.innerHeight;

  // set background to be fullscreen
  canvas.width = width;
  canvas.height = height;
})();