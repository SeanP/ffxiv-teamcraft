import { Pipe, PipeTransform } from '@angular/core';
import * as actionIcons from '../../core/data/sources/action-icons.json';

@Pipe({
  name: 'actionIcon'
})
export class ActionIconPipe implements PipeTransform {

  transform(id: number, fallback?: string): string {
    if (id === -1) {
      return 'assets/icons/remove_final_appraisal.png';
    }
    return actionIcons[id];
  }

}
