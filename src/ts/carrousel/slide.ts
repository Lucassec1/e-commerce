import Timeout from "./timeout.js";

export default class Slide {
  private static readonly PAUSE_DELAY = 300;
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;
  timeout: Timeout | null;
  pausedTimeout: Timeout | null;
  paused: boolean;
  thumbItems: HTMLElement[] | null;
  thumb: HTMLElement | null;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.timeout = null;
    this.pausedTimeout = null;
    this.index = localStorage.getItem("activeSlide")
      ? Number(localStorage.getItem("activeSlide"))
      : 0;
    this.slide = this.slides[this.index];
    this.paused = false;

    this.thumbItems = null;
    this.thumb = null;

    this.init();
  }

  hide(el: Element) {
    el.classList.remove("active");
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    localStorage.setItem("activeSlide", String(this.index));

    if (this.thumbItems) {
      this.thumb = this.thumbItems[this.index];
      this.thumbItems.forEach((el) => el.classList.remove("active"));
      this.thumb.classList.add("active");
    }

    this.slides.forEach((el) => this.hide(el));
    this.slide.classList.add("active");
    this.auto(this.time);
  }

  auto(time: number) {
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time);
    if (this.thumb) this.thumb.style.animationDuration = `${time}ms`;
  }

  pause() {
    document.getElementById("slide")!.classList.add("paused");
    this.pausedTimeout = new Timeout(() => {
      this.timeout?.pause();
      this.paused = true;
      this.thumb?.classList.add("paused");
    }, Slide.PAUSE_DELAY);
  }

  continue() {
    document.getElementById("slide")!.classList.remove("paused");
    this.pausedTimeout?.clear();
    if (this.paused) {
      this.paused = false;
      this.timeout?.continue();
      this.thumb?.classList.remove("paused");
    }
  }

  prev() {
    if (this.paused) return;
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prev);
  }

  next() {
    if (this.paused) return;
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }

  private createButton(imageSrc: string, pointerDownHandler: () => void, pointerUpHandler: () => void) {
    const button = document.createElement("button");
    const image = document.createElement("img");
    image.src = imageSrc;
    button.appendChild(image);
    image.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      pointerDownHandler();
    });
    image.addEventListener("pointerup", pointerUpHandler);
    return button;
  }

  private addControls() {
    const prevButton = this.createButton("src/image/icons/previous.svg", () => this.pause(), () => this.prev());
    prevButton.classList.add("prev__button");
    this.controls.appendChild(prevButton);
  
    const nextButton = this.createButton("src/image/icons/next.svg", () => this.pause(), () => this.next());
    nextButton.classList.add("next__button");
    this.controls.appendChild(nextButton);
  
    this.container.addEventListener("pointerdown", () => this.pause());
    this.container.addEventListener("dragenter", () => this.continue());
    this.container.addEventListener("pointerup", () => this.continue());
  }

  private addTumbItems() {
    const thumbContainer = document.createElement("div");
    thumbContainer.id = "slide__thumb";
    for (let i = 0; i < this.slides.length; i++) {
      thumbContainer.innerHTML += `
      <span>
        <span class="slide__thumb-item"></span>
      </span>
      `;
    }
    this.controls.appendChild(thumbContainer);
    this.thumbItems = Array.from(document.querySelectorAll(".slide__thumb-item"));
  }

  private init() {
    this.addControls();
    this.addTumbItems();
    this.show(this.index);
  }
}
