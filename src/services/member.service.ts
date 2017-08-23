import { Injectable } from '@angular/core';

import {Member} from '../datas/member';

@Injectable()
export class MemberService{
  static MY_INFO: Member;

  constructor(){}

}
