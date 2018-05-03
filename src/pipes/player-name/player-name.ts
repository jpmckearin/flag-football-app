import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName',
})
export class PlayerNamePipe implements PipeTransform {
  transform(player: any, ...args) {
    return `${player.firstName} ${player.lastName}`;
  }
}
