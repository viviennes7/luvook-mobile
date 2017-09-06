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

  public getProfileImg(){
    return HttpService.AUTH + this.profileImg;
  }

  public setProfileImg(profileImg){
    this.profileImg = profileImg;
  }
}
