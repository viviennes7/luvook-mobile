import {BookSubInfo} from "./booksubinfo";

export class Book { 
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: string;
  cover: string;
  categoryId: string;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  fixedPrice: boolean;
  customerReviewRank: number;
  subInfo: BookSubInfo;
}
