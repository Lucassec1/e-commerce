import { ProductData } from "../utils/productData";

export default class ProductService {
  private container: HTMLElement;

  private static readonly CSS_CLASSES = {
    productCard: 'product__card-item',
    title: 'product__card-title',
    text: 'product__card-text',
    priceContainer: 'product__card-price',
    previousPrice: 'product__card-previous-price',
    currentPrice: 'product__card-current-price',
  };

  constructor(containerId: string) {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
      throw new Error(`Element with id "${containerId}" not found.`);
    }
    this.container = containerElement;
  }

  private createElement(tag: string, className: string, textContent?: string): HTMLElement {
    const element = document.createElement(tag);
    element.className = className;
    if (textContent) {
      element.textContent = textContent;
    }
    return element;
  }
  
  private createImageElement(src: string, className: string): HTMLImageElement {
    const img = document.createElement('img') as HTMLImageElement;
    img.className = className;
    img.src = src;
    return img;
  }
  
  renderProduct(product: ProductData) {
    const productCard = this.createElement('div', ProductService.CSS_CLASSES.productCard);
    const img = this.createImageElement(product.image, '');
    productCard.appendChild(img);

    const title = this.createElement('h1', ProductService.CSS_CLASSES.title, product.name);
    productCard.appendChild(title);

    const text = this.createElement('span', ProductService.CSS_CLASSES.text, product.department);
    productCard.appendChild(text);

    const priceContainer = this.createElement('div', ProductService.CSS_CLASSES.priceContainer);
    productCard.appendChild(priceContainer);

    const previousPrice = this.createElement('span', ProductService.CSS_CLASSES.previousPrice, `$${product.previousPrice.toString()}`);
    priceContainer.appendChild(previousPrice);

    const currentPrice = this.createElement('span', ProductService.CSS_CLASSES.currentPrice, `$${product.currentPrice.toString()}`);
    priceContainer.appendChild(currentPrice);

    this.container.appendChild(productCard);
  }
}