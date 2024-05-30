import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLocation'
})
export class FormatLocationPipe implements PipeTransform {

  transform(value:string[]): string {
    return `${value[0]}, ${value[1]}`;
  }

}
