import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToHourFormat',
})
export class DecimalToHourFormatPipe implements PipeTransform {
  transform(decimal: number): unknown {
    var hrs = Math.floor(decimal);
    var min = Math.round((decimal - hrs) * 60);
    var min_pad: string = ('0' + String(min)).slice(-2);
    return hrs + ':' + min_pad;
  }
}
