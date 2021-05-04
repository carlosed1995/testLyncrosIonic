import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the KeyvaluePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'keyvalue',
})
export class KeyvaluePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(input: any): any {
    let keys = [];
    for (let key in input) {
      if (input.hasOwnProperty(key)) {
        keys.push({ key: key, value: input[key]});
      }
    }
    return keys;
  }
}
