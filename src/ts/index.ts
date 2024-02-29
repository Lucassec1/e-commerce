import Slide from "./carrousel/slide.js";
import ProductService from "./data/productService.js";
import Products from "./data/product.js";

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

const productService1 = new ProductService('product__card-items');
const productService2 = new ProductService('product__card-items-2');

for (const product of Products) {
  productService1.renderProduct(product);
  productService2.renderProduct(product);
}