import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToHHMMPipe',
})
export class DecimalToHHMMPipePipe implements PipeTransform {
  transform(decimal: number, ...args: unknown[]): string {
    const hrs: number = Math.floor(decimal);
    const min: number = Math.round((decimal - hrs) * 60);
    const min_pad: string = ('0' + String(min)).slice(-2);
    return hrs + ':' + min_pad;
  }
}
