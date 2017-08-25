import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'comma'
})
export class CommaPipe implements PipeTransform{

  transform(value: any): string{
    if(value){
      return value.toLocaleString('en');
    }else{
      return value;
    }
  }
}
