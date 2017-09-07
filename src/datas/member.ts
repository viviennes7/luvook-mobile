import { MemberType } from './member-type';
import {HttpService} from '../services/http.service';
export class Member {
  memberId: number;
  nickname: string;
  email :string;
  profileImg :string;
  memberType :MemberType;
  regDate :string;
  modDate :string;

}
