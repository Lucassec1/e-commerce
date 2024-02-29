export interface ProductData {
  image: string;
  name: string;
  department: string;
  previousPrice: number;
  currentPrice: number;
}

export interface FeaturedPostData {
  image: string;
  name: string;
  content: string;
  data: string;
  commentNumber: number;
  isNew: boolean;
}