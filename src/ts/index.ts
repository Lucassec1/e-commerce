import Slide from "./carrousel/slide.js";

const SLIDE_TIME = 5000;

const container = document.getElementById("slide");
const elements = document.getElementById("slide__elements");
const controls = document.getElementById("slide__controls");

if (container && elements && elements.children.length && controls) {
  const slide = new Slide(
    container,
    Array.from(elements.children),
    controls,
    SLIDE_TIME
  );

  slide.show(0);
} else {
  console.error("One or more required elements are missing");
}