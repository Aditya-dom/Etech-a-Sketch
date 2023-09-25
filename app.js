
const canvas = document.querySelector("#canvas");
const inputSlider = document.querySelector("#slider");
const sliderValue = document.querySelector("#canvasSize");
const blackBtn = document.querySelector("#black");
const rainbowBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");

// Set let, vars, and constants
const defaultCanvasPixelSize = 16;
const canvasSize = 500;
let currentColor = "black";
let currentCanvasSize = 16;


// Event for slider
sliderValue.textContent = inputSlider.value + "x" + inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value + "x" + inputSlider.value;
  setCanvas(inputSlider.value);
  currentCanvasSize = inputSlider.value;
});

// Event for buttons
blackBtn.addEventListener("click", () => {
  currentColor = "black";
  setCanvas(currentCanvasSize);
})

rainbowBtn.addEventListener("click", () => {
  currentColor = "rainbow";
  setCanvas(currentCanvasSize);
})

eraserBtn.addEventListener("click", () => {
  currentColor = "eraser";
})

clearBtn.addEventListener("click", () => {
   setCanvas(currentCanvasSize);
})

//Sets canvas to default size
setCanvas(defaultCanvasPixelSize);

// Sets canvas size
function setCanvas(size) {
  const previousPixels = document.getElementsByClassName("pixel");
  for (var i = previousPixels.length - 1; i >= 0; i--) {
    var previousPixel = previousPixels[i];
    if (previousPixel.className == "pixel") {
      previousPixel.remove();
    }
  }

  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");

    pixel.setAttribute("id", "pixel" + i.toString());
    pixel.setAttribute("class", "pixel");
    pixel.addEventListener("mouseover", randomColor);
    pixel.addEventListener("mousedown", randomColor);
    canvas.appendChild(pixel);
  }
}

//Sets random color
function randomColor(pixel) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  if(currentColor === "black"){
    pixel.target.style.backgroundColor = "rgb(0, 0, 0)";
  } else if (currentColor === "rainbow"){
  pixel.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  } else if (currentColor === "eraser"){
    pixel.target.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

