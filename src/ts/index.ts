import Slide from "./carrousel/slide.js";
import ProductService from "./product/productService.js";
import Products from "./product/product.js";
import { FeaturedPostService } from "./featuredPost/featuredPost.js";
import FeaturedPostComponent from "./featuredPost/featuredPostService.js";

const SLIDE_TIME = 5000;

const container = document.getElementById("c-slide");
const elements = document.getElementById("c-slide__elements");
const controls = document.getElementById("c-slide__controls");

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

const productService1 = new ProductService('c-product__card--items');
const productService2 = new ProductService('c-product__card--items-2');

for (const product of Products) {
  productService1.renderProduct(product);
  productService2.renderProduct(product);
}

class PostRenderer {
  private container!: HTMLElement;

  constructor(private readonly postService: FeaturedPostService, containerSelector: string) {
    const containerElement = document.getElementById(containerSelector);
    if (!containerElement) {
      throw new Error(`Element with id "${containerSelector}" not found.`);
    }
    this.container = containerElement;
  }

  public renderPosts() {
    const postFactory = new FeaturedPostComponent();
    this.postService.getFeaturedPosts().forEach((post) => {
      const component = postFactory.createComponent(post);
      this.container.appendChild(component);
    });
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  new PostRenderer(new FeaturedPostService(), 'c-posts__featured').renderPosts();
});