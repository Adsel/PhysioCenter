import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCutter'
})
export class TimeCutterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.substring(0, 8);
  }

}
