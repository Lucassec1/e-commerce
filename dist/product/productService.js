export default class ProductService {
    container;
    static CSS_CLASSES = {
        productCard: 'c-product__card--item',
        title: 'c-product__card--title',
        text: 'c-product__card--text',
        priceContainer: 'c-product__card--price',
        previousPrice: 'c-product__card--previous-price',
        currentPrice: 'c-product__card--current-price',
    };
    constructor(containerId) {
        const containerElement = document.getElementById(containerId);
        if (!containerElement) {
            throw new Error(`Element with id "${containerId}" not found.`);
        }
        this.container = containerElement;
    }
    createElement(tag, className, textContent) {
        const element = document.createElement(tag);
        element.className = className;
        if (textContent) {
            element.textContent = textContent;
        }
        return element;
    }
    createImageElement(src, className) {
        const img = document.createElement('img');
        img.className = className;
        img.src = src;
        return img;
    }
    renderProduct(product) {
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
//# sourceMappingURL=productService.js.map