import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';

import { Member } from '../datas/member';

@Injectable()
export class JwtService{

  constructor(private storage: Storage){}

  set(jwt:string){
    this.storage.set("jwt", jwt);
  }

  //this.jwtService.get().subscribe(data => alert("RX ::: " + data));

  get(){
    return Observable.fromPromise(
      this.storage.get("jwt").then(val => {
        return val;
      })
    );
  }

}
