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

  const drawAnchor = () => {
    // get the position for the anchor on the canvas
    positions.anchorX = width / 2;
    positions.anchorY = height * 0.9;

    const fireworks = [];
    const flecks = [];
    const flecks2 = [];
    const flecks3 = [];
    const numberOfFlecks = 25; //  bear in mind: performance gets worse with higher number of flecks

    const random = (min, max) => Math.random() * (max - min) + min;

    // calculate the distance between two points
    // using Pythagorean theorem
    // d = √x² + y², where x = x1 - x2, and y = y1 - y2
    const getDistance = (x1, y1, x2, y2) => {
      const xDistance = x1 - x2;
      const yDistance = y1 - y2;

      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    };

    let mouseClicked = false;

    context.clearRect(0, 0, width, height);

    // save context to remove transformation afterwards
    context.save();

    context.translate(positions.anchorX, positions.anchorY);

    // restores the empty context state
    context.restore();
  };

  const attachEventListeners = () => {
  // listen to the mousemove event
  canvas.addEventListener("mousemove", (e) => {
    // set the mouse positions to the correct coordinates
    positions.mouseX = e.pageX;
    positions.mouseY = e.pageY;
  });

  // track mouse click events
  canvas.addEventListener("mousedown", () => (mouseClicked = true));
  canvas.addEventListener("mouseup", () => (mouseClicked = false));
};

  const loop = () => {
    requestAnimationFrame(loop); // call the loop function indefinitely and redraw the screen every frame
    drawAnchor();
  };

  window.addEventListener("load", () => {
    attachEventListeners();
    loop();
  });
})();