import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StorageService{
  constructor(private storage: Storage){}

  setJwt(jwt:string){
    this.storage.set("jwt", jwt);
  }

  get(key: string){
    return Observable.fromPromise(
      this.storage.get(key).then(val => {
        return val;
      })
    );

  }
}
