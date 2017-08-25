import {Board} from './board';

export class BookBoard extends Board{
  title: string;
  categoryId: number;
  cover: string;
  isbn: number;
  isbn13: number;
}
