import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService{
  constructor(private storage: Storage){}

  setJwt(jwt:string){
    this.storage.set("jwt", jwt);
  }

  get(key: string){
    this.storage.get(key).then(val => {
      alert(val);
    });
  }
}
