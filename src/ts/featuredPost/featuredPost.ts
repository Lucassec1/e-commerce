import { FeaturedPostData } from "../utils/productData";

export class FeaturedPostService {
  public getFeaturedPosts(): FeaturedPostData[] {
    return [
      {
        image: "./src/image/background/post-1.svg",
        name: "Loudest à la Madison #1 (L'integral)",
        content: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        data: "22 April 2021",
        commentNumber: 10,
        isNew: true
      },
      {
        image: "./src/image/background/post-2.svg",
        name: "Loudest à la Madison #1 (L'integral)",
        content: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        data: "22 April 2021",
        commentNumber: 10,
        isNew: true
      },
      {
        image: "./src/image/background/post-3.svg",
        name: "Loudest à la Madison #1 (L'integral)",
        content: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        data: "22 April 2021",
        commentNumber: 10,
        isNew: true
      }
    ]
  }
}