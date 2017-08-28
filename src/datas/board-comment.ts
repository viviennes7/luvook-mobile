import {Member} from "./member";

export class BoardComment{
  boardCommentId: number;
  memberId: number;
  member: Member;
  boardId: number;
  contents: string;
  regDate: string;
  modDate: string;

}
