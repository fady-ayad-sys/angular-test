import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addEmoji'
})
export class AddEmojiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '😁';
  }

}
