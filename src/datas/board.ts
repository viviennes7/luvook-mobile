import { Member } from "./member";

export class Board {
  boardId: number;
  member: Member;
  contents: string;
  heartCount: number;
  commentCount: number;
  startCount: number;
  isClickedHeart: boolean;
  regDate: string;
  modDate: string;
}
