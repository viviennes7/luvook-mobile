import { Member } from "./member";

export class Board {
  boardId: number;
  member: Member;
  contents: string;
  heartCount: number;
  commentCount: number;
  startCount: number;
  isClickedHeart: boolean;
  imgs: Array<string> = [];
  regDate: string;
  modDate: string;
}
