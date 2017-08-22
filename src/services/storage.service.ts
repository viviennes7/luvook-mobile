import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';

import { Member } from '../datas/member';

@Injectable()
export class StorageService{

  constructor(private storage: Storage){}

  setJwt(jwt:string){
    this.storage.set("jwt", jwt);
  }

  //this.storageService.get("jwt").subscribe(data => alert("RX ::: " + data));

  get(key: string){
    return Observable.fromPromise(
      this.storage.get(key).then(val => {
        return val;
      })
    );
  }

}
