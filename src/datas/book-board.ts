import {Board} from './board';

export class BookBoard extends Board{
  title: string;
  categoryId: number;
  cover: string;
  bigCover: string;
  isbn: string;
  isbn13: string;
}
