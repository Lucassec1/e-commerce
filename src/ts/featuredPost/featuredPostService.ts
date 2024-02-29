import { FeaturedPostData } from "../utils/productData";

export default class FeaturedPostComponent {
  public createComponent(post: FeaturedPostData): HTMLElement {
    const component = document.createElement("article");
    component.classList.add("c-post");
    component.innerHTML = `
      <img src="${post.image}" alt="Featured Post">
      <div class="c-post__info"><span class="c-post__message">${post.isNew ? 'NEW' : ''}</span></div>
      <div class="c-post__content">
        <div class="c-post__tag">
          <span id="c-post__tag--active">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>
        <h1 class="c-post__name">${post.name}</h1>
        <p class="c-post__text">${post.content}</p>
        <div class="c-post__public">
          <div class="c-post__date">
            <img src="./src/assets/icons/clock.svg" alt="Clock">
            <span class="c-post__date--info">${post.data}</span>
          </div>
          <div class="c-post__comments">
            <img src="./src/assets/icons/comments.svg" alt="Comments">
            <span class="c-post__comments--info">${post.commentNumber} comments</span>
          </div>
        </div>
        <div class="c-post__learn--more">
          <a href="#">Learn More</a>
          <img src="./src/assets/icons/learn-more.svg" alt="Learn more">
        </div>
      </div>
    `;
    return component;
  }
}