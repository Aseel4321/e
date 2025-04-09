import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipp',

})
export class PippPipe implements PipeTransform {

  transform(value:Date): any {
    return value.getTime();
  }

}
